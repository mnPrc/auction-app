import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

export const SearchInput = styled.input`
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 1rem;
    width: 20rem;
    transition: border-color 0.2s;

    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

export const SearchButton = styled.button`
    padding: 0.75rem 1.5rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #0056b3;
    }
`;