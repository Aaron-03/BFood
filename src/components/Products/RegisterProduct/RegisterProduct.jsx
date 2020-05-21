import React from 'react';

import { Form } from 'react-bootstrap';

import ProductIcon from '../../../assets/img/shipping-and-delivery.svg';
import CodeBarsIcon from '../../../assets/img/security.svg';

import {
  StyledIconForm,
  FormGroupStyled,
  FormControlStyled,
  PStyled,
  FormFileStyled,
  FormFileLabelButton,
  BtnRegistrar,
  BFoodLetter,
  RegistroProductoContainer,
} from './RegisterProduct.styles';

import './RegisterProduct.positions.css';

function RegisterProduct(props) {
  return (
    <div className="RegistroProduct">
      <RegistroProductoContainer>
        <h3>Registro</h3>
        <BFoodLetter>BFood</BFoodLetter>
        <h3>Productos</h3>
        <Form>
          <FormGroupStyled>
            <StyledIconForm src={ProductIcon}></StyledIconForm>
            <FormControlStyled placeholder="INGRESE EL NOMBRE DEL PRODUCTO" />
          </FormGroupStyled>
          <FormGroupStyled>
            <StyledIconForm src={ProductIcon}></StyledIconForm>
            <FormControlStyled placeholder="INGRESE EL ID DEL VENDEDOR" />
          </FormGroupStyled>
          <FormGroupStyled>
            <StyledIconForm src={ProductIcon}></StyledIconForm>
            <FormControlStyled placeholder="INGRESE EL R.U.C DEL VENDEDOR" />
          </FormGroupStyled>
          <FormGroupStyled>
            <StyledIconForm src={CodeBarsIcon}></StyledIconForm>
            <FormControlStyled placeholder="CODIGO DE BARRAS" />
          </FormGroupStyled>
          <FormGroupStyled>
            <PStyled>IMAGEN DEL PRODUCTO (JPG O PNG)</PStyled>
            <FormFileLabelButton htmlFor="archivo" className="btn-subir">
              SELECCIONE UN ARCHIVO
            </FormFileLabelButton>
            <FormFileStyled id="archivo" />
          </FormGroupStyled>
          <BtnRegistrar className="btn-registrar">REGISTRAR</BtnRegistrar>
        </Form>
      </RegistroProductoContainer>
    </div>
  );
}

export default RegisterProduct;
