import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useDispatchAndSelector";
import { activeUserSelector, isUserAuthenticated } from "../store/auth/selectors";
import { logout } from "../store/auth/slice";
import {
    Nav,
    UserInfo,
    NavLinks,
    StyledLink,
    LogoutButton
} from "../styles/NavbarStyles"

export default function Navbar() {
    const isAuthenticated = useAppSelector(isUserAuthenticated);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const activeUser = useAppSelector(activeUserSelector);

    async function handleLogout() {
        dispatch(
            logout({
                meta: {
                    onSuccess: () => {
                        navigate('/login');
                    },
                },
            })
        );
    }

    return (
        <Nav>
            <NavLinks>
                <StyledLink to="/">Auctions</StyledLink>
                {!isAuthenticated && <StyledLink to="/register">Register</StyledLink>}
                {!isAuthenticated && <StyledLink to="/login">Login</StyledLink>}
            </NavLinks>    
            <NavLinks>
                {activeUser && (
                    <UserInfo>
                        {activeUser.first_name} {activeUser.last_name}
                    </UserInfo>
                )}
                {isAuthenticated && <LogoutButton onClick={handleLogout}>Logout</LogoutButton>}
            </NavLinks>
        </Nav>
    );
}
