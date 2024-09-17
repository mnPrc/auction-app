import styled from "styled-components";

export const CreateItemForm = styled.form`
    max-width: 19rem;
    margin: 0 auto;
    padding: 1.25rem;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
    margin-bottom: 1.25rem;
`;

export const Label = styled.label`
    display: block;
    margin-bottom: 0.3rem;
    font-weight: bold;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.7rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
`;

export const Textarea = styled.textarea`
    width: 100%;
    padding: 0.7rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    min-height: 6.25rem;
`;

export const SubmitButton = styled.button`
    background-color: #007bff;
    color: white;
    padding: 0.7rem 1.25rem;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #0056b3;
    }
`;
