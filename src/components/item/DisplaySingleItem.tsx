import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatchAndSelector";
import { selectItem } from "../../store/item/selectors";
import { deleteItem, getItem } from "../../store/item/slice";
import DisplayImages from "./DisplayImages";
import { useEffect } from "react";
import { DeleteButton, ItemContainer, ItemDetails, ItemTitle } from "../../styles/display_single_item.styles";
import { activeUserSelector } from "../../store/auth/selectors";
import { getActiveUser } from "../../store/auth/slice";
import DisplayBidForm from "./DisplayBidForm";



const DisplaySingleItem: React.FC = () => {
    const dispatch = useAppDispatch();
    const item = useAppSelector(selectItem);
    const activeUser = useAppSelector(activeUserSelector);
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        dispatch(getActiveUser());
    },[dispatch])
    
    useEffect(() => {
        if(id){
            dispatch(getItem({id: Number(id)}))
        }
    },[dispatch, id])

    const handleDeleteItem = () => {
        if(!item) return;
        dispatch(
            deleteItem({
                id: item.id,
                meta:{
                    onSuccess: () => {
                        navigate("/");
                    }
                }
            })
        )
    }

    return(
        <ItemContainer>
            <ItemTitle>{item.name}</ItemTitle>
            <ItemDetails>{item.description}</ItemDetails>
            <ItemDetails>{item.current_price}</ItemDetails>
            <ItemDetails>{item.buy_now_price}</ItemDetails>
            <ItemDetails>{item.end_time}</ItemDetails>
            <DisplayImages images={item.images}/>
            {activeUser && item && activeUser.id !== item.user_id && (
                <DisplayBidForm item={item} />
            )}
            {activeUser && item && activeUser.id === item.user_id && (
                <DeleteButton onClick={handleDeleteItem}>Remove item from auction</DeleteButton>
            )}
        </ItemContainer>
    )
}

export default DisplaySingleItem;