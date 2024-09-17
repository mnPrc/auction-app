import styled from "styled-components";

export const BidFormContainer = styled.div`
    max-width: 25rem;
    margin-top: 1.25rem;
    padding: 1.25rem;
    background-color: #f9f9f9;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const BidForm = styled.form`
    display: flex;
    gap: 0.7rem;
    margin-bottom: 1.25rem;
`;

export const BidInput = styled.input`
    flex-grow: 1;
    padding: 0.7rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
`;

export const BidButton = styled.button`
    background-color: #28a745;
    color: white;
    padding: 0.7rem 1.25rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #218838;
    }
`;

export const BuyNowButton = styled.button`
    width: 100%;
    background-color: #ffc107;
    color: #212529;
    padding: 0.7rem 1.25rem;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #e0a800;
    }
`;
