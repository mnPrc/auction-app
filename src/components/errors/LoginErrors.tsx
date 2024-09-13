import{
    ErrorContainer,
} from "../../styles/error.styles";

interface LoginErrorsProps {
    error?: string;
}

function LoginErrors({ error }: LoginErrorsProps) {
    return (
        <ErrorContainer>
            {error && <p>{error}</p>}
        </ErrorContainer>
    );
}

export default LoginErrors;