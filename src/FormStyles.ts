// src/styles/FormStyles.js
import { Field } from 'formik';
import {Form} from 'formik';
import styled from 'styled-components';

export const FormContainer = styled(Form)`
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform: perspective(1px) translateZ(0);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  }
`;

export const FormField = styled.div`
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: 700;
`;

export const FormInput = styled(Field)`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 14px;
`;

export const FormButton = styled.button`
  
  padding: 10px 20px;
  font-size: 14px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;
  margin-right:10px;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const BackButton = styled(FormButton)`
  background-color: #6c757d;

  &:hover {
    background-color: #5a6268;
  }
`;

