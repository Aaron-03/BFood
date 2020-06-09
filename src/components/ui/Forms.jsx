import styled from '@emotion/styled';
import { Container } from 'react-bootstrap';

const FormSeller = styled.form`
  padding: 1rem;
  min-width: 20rem;
  max-width: ${(props) => (props.customMaxWidth ? props.customMaxWidth : '')};
  height: auto;
  border: 3px solid var(--custom-black);
  background-color: var(--custom-white);
  border-radius: 27px;
  margin: auto;
`;
const FormRegisterProduct = styled.form`
  padding: 1rem;
  min-width: 20rem;
  max-width: ${(props) => (props.customMaxWidth ? props.customMaxWidth : '')};
  height: auto;
  border: 3px solid var(--custom-black);
  background-color: var(--custom-white);
  border-radius: 27px;
  margin: auto;
`;
const FilterOfProducts = styled.div`
  background-color: #ededed;
  height: 100vh;
`;

export { FormSeller, FormRegisterProduct, FilterOfProducts };
