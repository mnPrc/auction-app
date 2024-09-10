import React, {useEffect, useState} from "react";
import RegisterErrors from "../../components/errors/RegisterErrors";
import { register, setRegisterErrors } from "../../store/auth/slice";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/useDispatchAndSelector";
import { selectRegisterErrors } from "../../store/auth/selectors";
import { RegisterNewUser } from "../../types/user.types";
import {
    FormContainer,
    FormWrapper,
    FormTitle,
    InputGroup,
    Label,
    Input,
    SubmitButton
} from "../../styles/FormStyles";

const Register: React.FC = () => {
    const [user, setUser] = useState<RegisterNewUser>({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const registerErrors = useAppSelector(selectRegisterErrors);

    useEffect(() => {
        dispatch(setRegisterErrors([]));
    }, []);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setRegisterErrors([]));
        dispatch(
            register({
                newUser: user,
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
            <FormTitle>Register</FormTitle>
            <FormWrapper onSubmit={handleSubmit}>
                <InputGroup>
                    <Label htmlFor="first_name">First Name:</Label>
                    <Input
                        type="text"
                        id="first_name"
                        value={user.first_name}
                        onChange={({ target }) =>
                            setUser({ ...user, first_name: target.value })
                        }
                        required
                    />
                </InputGroup>
                <InputGroup>
                    <Label htmlFor="last_name">Last Name:</Label>
                    <Input
                        type="text"
                        id="last_name"
                        value={user.last_name}
                        onChange={({ target }) =>
                            setUser({ ...user, last_name: target.value })
                        }
                        required
                    />
                </InputGroup>
                <InputGroup>
                    <Label htmlFor="email">Email:</Label>
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
                    <Label htmlFor="password">Password:</Label>
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
                <InputGroup>
                    <Label htmlFor="password_confirmation">Confirm Password:</Label>
                    <Input
                        type="password"
                        id="password_confirmation"
                        value={user.password_confirmation}
                        onChange={({ target }) =>
                            setUser({ ...user, password_confirmation: target.value })
                        }
                        required
                    />
                </InputGroup>
                <SubmitButton type="submit">Register</SubmitButton>
            </FormWrapper>
            {registerErrors && <RegisterErrors errors={registerErrors}/>}
        </FormContainer>
    );
};

export default Register;