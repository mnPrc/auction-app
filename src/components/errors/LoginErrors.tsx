import{
    ErrorContainer,
} from "../../styles/error.styles";
import { LoginErrorsProps } from "../../types/props.types";

const LoginErrors: React.FC<LoginErrorsProps> = ({error}) => {
    return (
        <ErrorContainer>
            {error && <p>{error}</p>}
        </ErrorContainer>
    );
}

export default LoginErrors;