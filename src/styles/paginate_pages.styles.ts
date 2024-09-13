import styled from "styled-components";

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0;
`;

export const PageButton = styled.button<{ isActive?: boolean }>`
    padding: 0.75rem 1rem;
    margin: 0 0.5rem;
    background-color: ${({ isActive }) => (isActive ? '#007bff' : '#ddd')};
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: ${({ isActive }) => (isActive ? 'default' : 'pointer')};
    pointer-events: ${({ isActive }) => (isActive ? 'none' : 'auto')};

    &:hover {
        background-color: ${({ isActive }) => !isActive && '#0056b3'};
    }
`;

export const NumberButton = styled.button<{ isActive?: boolean }>`
    padding: 0.8rem;
    margin: 0 0.3rem;
    background-color: ${({ isActive }) => (isActive ? '#666' : '#ddd')};
    color: #fff;
    border: none;
    border-radius: 50%;
    cursor: ${({ isActive }) => (isActive ? 'not-allowed' : 'pointer')};
    transition: background-color 0.2s ease-in-out;

    &:hover {
        background-color: ${({ isActive }) => (!isActive && '#bbb')};
    }
`;