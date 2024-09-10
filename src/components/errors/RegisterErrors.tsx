import{
    ErrorContainer,
} from "../../styles/ErrorStyles";

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