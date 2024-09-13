import{
    ErrorContainer,
} from "../../styles/error.styles";

interface RegisterErrorsProps {
    errors?: string[];
}

function RegisterErrors({ errors }: RegisterErrorsProps) {
    return (
        <ErrorContainer>
			{errors?.map((error, index) => (
				<p key={index}>{error}</p>
			))}
		</ErrorContainer>
    );
}

export default RegisterErrors;