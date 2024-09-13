import styled from "styled-components";

export const ImagesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 0.3rem;
`;

export const ImageWrapper = styled.div`
    width: 10rem;
    height: 10rem;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const StyledImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;
