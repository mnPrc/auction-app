import styled from "styled-components";

export const ItemContainer = styled.div`
    padding: 2rem;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: 2rem auto;
`;

export const ItemTitle = styled.h2`
    font-size: 2rem;
    color: #333;
`;

export const ItemDetails = styled.p`
    font-size: 1.25rem;
    color: #555;
    margin: 0.5rem 0;
`;

export const DeleteButton = styled.button`
    padding: 0.75rem 1.5rem;
    background-color: #d9534f;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #c9302c;
    }
`;