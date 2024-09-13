import { API_STORAGE } from "../../constants";
import { ImagesContainer, ImageWrapper, StyledImage } from "../../styles/display_images.styles";
import { DisplayImagesProps } from "../../types/props.types";

const DisplayImages: React.FC<DisplayImagesProps> = ({ images }) => {
    if (!images || images.length === 0) {
        return <p>No images available.</p>;
    }
    return(
        <ImagesContainer>
            {images.map((image) => 
                <ImageWrapper key={image.id}>
                    <StyledImage
                        src={`${API_STORAGE}/${image.image_path}`}
                        alt={`Image ${image.id}`}
                    />
                </ImageWrapper>
            )}
        </ImagesContainer>
    )
}

export default DisplayImages;