import { ErrorContainer } from "../../styles/error.styles";
import { CreateItemErrorsProps } from "../../types/props.types";

const CreateItemErrors: React.FC<CreateItemErrorsProps> = ({ errors }) => {
    return (
        <ErrorContainer>
            {errors.map((error, index) => (
                <p key={index}>{error}</p>
            ))}
        </ErrorContainer>
    );
};

export default CreateItemErrors;