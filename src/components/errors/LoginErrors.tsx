import{
    ErrorContainer,
} from "../../styles/ErrorStyles";

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