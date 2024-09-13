import React from "react";
import { API_STORAGE } from "../../constants";
import { ItemRowProps } from "../../types/props.types";
import { ItemImage, ItemPrice, RowContainer, ItemLink } from "../../styles/item_row.styles";

const ItemRow: React.FC<ItemRowProps> = ({ item }) => {
    const firstImage = item.images[0]?.image_path;
    const imageUrl = firstImage ? `${API_STORAGE}/${firstImage}` : '';
    console.log(imageUrl);

    return (
        <RowContainer>
            {imageUrl && <ItemImage src={imageUrl} alt={item.name} />}
            <ItemLink to={`/item/${item.id}`}><h3>{item.name}</h3></ItemLink>
            <ItemPrice>Price: ${item.current_price}</ItemPrice>
        </RowContainer>
    );
};

export default ItemRow;