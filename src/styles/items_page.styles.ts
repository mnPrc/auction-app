import styled from 'styled-components';


export const Header = styled.h1`
    font-size: 2.5rem;  
    margin-bottom: 2rem;
    text-transform: uppercase;  
    text-align: center;
    font-weight: bold;
`;

export const ItemsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: #f7f7f7; 
    min-height: 100vh;
`;

export const ItemList = styled.div`
    width: 100%;
    max-width: 75rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
`;