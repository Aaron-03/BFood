import {
  Image,
  FormGroup,
  FormControl,
  FormFile,
  Container,
} from 'react-bootstrap';

import styled from '@emotion/styled';

const StyledIconForm = styled(Image)`
  width: 36px;
  height: 36px;
`;

const FormGroupStyled = styled(FormGroup)`
  border-bottom: 2px solid;
  width: 100%;
`;
const FormControlStyled = styled(FormControl)`
  width: 94%;
  display: inline;
  text-align: center;
  font-size: 14px;
`;
const PStyled = styled.p`
  width: 200px;
  text-align: center;
  margin-left: 20px;
`;
const FormFileStyled = styled(FormFile)`
  display: none;
`;
const FormFileLabelButton = styled.label`
  border: 3px solid;
  border-color: black;
  background: #f74545;
  color: #ffffff;
  padding: 6px 20px;
`;
const BtnRegistrar = styled.button`
  display: inline-block;
  width: 9.5rem;
  height: 2.5rem;
  border-radius: 12px;
  font-weight: bold;
  text-align: center;
  color: var(--custom-white);
  background-color: var(--custom-blue);
  border: 3px solid var(--custom-black);
  transition: 0.4s all;

  &:hover {
    opacity: 0.8;
  }
`;
const BFoodLetter = styled.h3`
  -webkit-text-stroke-color: #f74545;
  -webkit-text-stroke-width: 2px;
  color: white;
  font-size: 3rem;
`;
const RegistroProductoContainer = styled(Container)`
  border: 3px solid;
  border-radius: 27px;
  width: 50%;
  background: #ffffff;
`;
export {
  StyledIconForm,
  FormGroupStyled,
  FormControlStyled,
  PStyled,
  FormFileStyled,
  FormFileLabelButton,
  BtnRegistrar,
  BFoodLetter,
  RegistroProductoContainer,
};
