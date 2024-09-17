import{
    ErrorContainer,
} from "../../styles/error.styles";
import { RegisterErrorsProps } from "../../types/props.types";

const RegisterErrors: React.FC<RegisterErrorsProps> = ({errors}) =>  {
    return (
        <ErrorContainer>
			{errors?.map((error, index) => (
				<p key={index}>{error}</p>
			))}
		</ErrorContainer>
    );
}

export default RegisterErrors;