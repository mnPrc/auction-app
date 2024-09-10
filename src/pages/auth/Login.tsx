import React, {useEffect, useState} from "react";
import LoginErrors from "../../components/errors/LoginErrors";
import { login, setLoginErrors } from "../../store/auth/slice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatchAndSelector";
import { selectLoginErrors } from "../../store/auth/selectors";
import { LoginCredentials } from "../../types/user.types";
import {
    FormContainer,
    FormWrapper,
    FormTitle,
    InputGroup,
    Label,
    Input,
    SubmitButton
} from "../../styles/FormStyles";

const Login: React.FC = () => {
    const [user, setUser] = useState<LoginCredentials>({
        email: "",
        password: "",
    });

    useEffect(() => {
        dispatch(setLoginErrors(""));
    }, []);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const loginErrors = useAppSelector(selectLoginErrors);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setLoginErrors(""));
        dispatch(
            login({
                credentials: user,
                meta: {
                    onSuccess: () => {
                        navigate("/");
                    },
                },
            })
        );
    };

    

    return (
        <FormContainer>
            <FormTitle>Login</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
                <InputGroup>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        id="email"
                        value={user.email}
                        onChange={({ target }) =>
                            setUser({ ...user, email: target.value })
                        }
                        required
                    />
                </InputGroup>
                <InputGroup>
                    <Label htmlFor="password">Password</Label>
                    <Input
                        type="password"
                        id="password"
                        value={user.password}
                        onChange={({ target }) =>
                            setUser({ ...user, password: target.value })
                        }
                        required
                    />
                </InputGroup>
                <SubmitButton type="submit">Login</SubmitButton>
            </FormWrapper>
            {loginErrors && <LoginErrors error={loginErrors} />}
        </FormContainer>
    );
};

export default Login;