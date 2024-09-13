import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatchAndSelector";
import { getAllItems } from "../../store/item/slice";
import { selectItems } from "../../store/item/selectors";
import ItemSearch from "../../components/item/ItemSearch";
import ItemRow from "../../components/item/ItemRow";
import PaginatePages from "../../components/item/PaginatePages";
import { ItemList, ItemsPageContainer, Header } from "../../styles/items_page.styles";


const ItemsPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const items = useAppSelector(selectItems);
    console.log('Items from selector:', items)

    useEffect(() => {
        dispatch(getAllItems({ page: 1 }));
    }, [dispatch]);

    return(
        <ItemsPageContainer>
            <Header>Auctions</Header>
            <ItemSearch/>
            <ItemList>
                {items.map(item => (
                    <ItemRow key={item.id} item={item}/>
                ))}
            </ItemList>
            <PaginatePages/>
        </ItemsPageContainer>
    );
}

export default ItemsPage;