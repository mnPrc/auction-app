import styled from "styled-components";

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 80vh;
    padding: 2rem;
`;

export const FormWrapper = styled.form`
    background: #fff;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
`;

export const FormTitle = styled.h2`
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    color: #333;
    text-align: center;
`;

export const InputGroup = styled.div`
    margin-bottom: 1.5rem;
    margin-right: 25px;

`;

export const Label = styled.label`
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #555;
`;

export const Input = styled.input`
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px;
    transition: border-color 0.2s;

    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

export const SubmitButton = styled.button`
    width: 100%;
    padding: 0.75rem;
    font-size: 1rem;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #0056b3;
    }
`;