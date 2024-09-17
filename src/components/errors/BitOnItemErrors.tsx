import{
    ErrorContainer,
} from "../../styles/error.styles";
import { BidOnItemProps } from "../../types/props.types";

const BidOnItemErrors: React.FC<BidOnItemProps> = ({ error }) => {
    return (
        <ErrorContainer>
            {error && <p>{error}</p>}
        </ErrorContainer>
    );
}

export default BidOnItemErrors;