import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatchAndSelector";
import { bidOnItem, buyNowItem, setBidOnItemErrors } from "../../store/item/slice";
import { DisplayBidFormProps } from "../../types/props.types";
import { selectBidOnItemErrors } from "../../store/item/selectors";
import BidOnItemErrors from "../errors/BitOnItemErrors";
import { BidButton, BidForm, BidFormContainer, BidInput, BuyNowButton } from "../../styles/display_bid_on_item.style";

const DisplayBidForm: React.FC<DisplayBidFormProps> = ({ item }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const bidOnItemErrors = useAppSelector(selectBidOnItemErrors);
    const [bidAmount, setBidAmount] = useState<string>("");

    useEffect(() => {
        dispatch(setBidOnItemErrors(""));
    }, [dispatch, item]);

    const handleBidSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!bidAmount) return;
        dispatch(setBidOnItemErrors(""));
        dispatch(
            bidOnItem({
                id: item.id,
                bidAmount: parseFloat(bidAmount)
            })
        );
        setBidAmount("");
    }

    const handleBuyNow = () => {
        dispatch(
            buyNowItem({
                id: item.id,
                meta: {
                    onSuccess: () => {
                        navigate("/");
                    },
                },
            })
        );
    };

    return (
        <BidFormContainer>
            <BidForm onSubmit={handleBidSubmit}>
                <BidInput
                    type="number"
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                    placeholder="Enter bid amount"
                />
                <BidButton type="submit">Place Bid</BidButton>
            </BidForm>
            {bidOnItemErrors && <BidOnItemErrors error={bidOnItemErrors} />}
            <BuyNowButton onClick={handleBuyNow}>
                Buy Now for ${item.buy_now_price}
            </BuyNowButton>
        </BidFormContainer>
    );
};

export default DisplayBidForm;