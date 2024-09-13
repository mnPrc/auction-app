import { Link } from "react-router-dom";
import styled from "styled-components";

export const RowContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #eee;
`;

export const ItemImage = styled.img`
    width: 5rem;
    height: 5rem;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 1.5rem;
`;

export const ItemLink = styled(Link)`
    font-size: 1.25rem;
    color: #007bff;
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }
`;

export const ItemPrice = styled.p`
    margin-left: auto;
    font-size: 1.25rem;
    color: #333;
`;