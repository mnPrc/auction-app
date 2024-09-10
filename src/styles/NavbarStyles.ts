import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
    background-color: #f8f9fa; 
    color: #333;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const UserInfo = styled.div`
    color: ##696969;
    margin-right: 1rem;
`;

export const NavLinks = styled.div`
    display: flex;
    align-items: center;
`;

export const StyledLink = styled(Link)`
    color: #696969;
    text-decoration: none;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s;
    border-radius: 4px;

    &:hover {
        background-color: #e9ecef; 
    }
`;

export const LogoutButton = styled.span`
    color: #dc3545; 
    cursor: pointer;
    margin-left: 1rem;
    padding: 0.5rem 1rem;
    transition: background-color 0.2s;
    border-radius: 4px;

    &:hover {
        background-color: #e9ecef; 
    }
`;