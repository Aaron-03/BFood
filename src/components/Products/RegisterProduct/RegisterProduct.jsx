import React, { Fragment } from 'react';
import { Container, Row, FormGroup } from 'react-bootstrap';
import styled from '@emotion/styled';

import { useRegisterProduct } from '../../../hooks/useRegisterProduct';

import ProductIcon from '../../../assets/img/shipping-and-delivery.svg';
import CodeBarsIcon from '../../../assets/img/security.svg';
import avatarIcon from '../../../assets/img/Form/avatar.svg';
import { FormFileStyled } from './RegisterProduct.styles';

import { FormRegisterProduct } from '../../ui/Forms';
import { BFoodTitle, BFoodSubTitle, BFoodLabel } from '../../ui/Texts';
import { ContentInputText, InputText } from '../../ui/Fields';
import { BtnSendData } from '../../ui/Buttons';
import { ImageSvg } from '../../ui/Images';

import './RegisterProduct.positions.css';

const CustomInputFile = styled(BFoodLabel)`
  background-color: var(--custom-red);
  border: 2px solid #000000;

  font-size: 7pt;
  padding: 0.2rem;
  height: 2.5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

function RegisterProduct(props) {
  const register = () => {
    alert(`Producto creado!
    Nombre del producto : ${inputs.nombreProducto}`);
  };
  const { inputs, handleInputChange, handleSubmit } = useRegisterProduct(
    register
  );
  return (
    <Fragment className="RegistroProduct">
      <Container>
        <Row className="justify-content-center align-items-center p-2">
          <FormRegisterProduct
            customMaxWidth="45rem"
            className="col-sm-12 px-1 form-registro-producto"
            onSubmit={handleSubmit}
          >
            <div className="col-sm-12 d-flex justify-content-between align-items-center mt-2">
              <BFoodSubTitle customSize="18pt">Registro</BFoodSubTitle>
              <BFoodTitle className="ml-3">BFood</BFoodTitle>
              <BFoodSubTitle customSize="18pt">Productos</BFoodSubTitle>
            </div>

            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-10 m-auto">
                <ImageSvg
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                  src={ProductIcon}
                ></ImageSvg>
                <InputText
                  className="col-10 text-left"
                  type="text"
                  placeholder="INGRESE EL NOMBRE DEL PRODUCTO"
                  name="nombreProducto"
                  onChange={handleInputChange}
                  value={inputs.nombreProducto}
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-10 m-auto">
                <ImageSvg
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                  src={avatarIcon}
                ></ImageSvg>
                <InputText
                  className="col-10 text-left"
                  type="text"
                  placeholder="INGRESE EL ID DEL VENDEDOR"
                  onChange={handleInputChange}
                  name="idVendedor"
                  value={inputs.idVendedor}
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-10 m-auto">
                <ImageSvg
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                  src={avatarIcon}
                ></ImageSvg>
                <InputText
                  className="col-10 text-left"
                  type="text"
                  placeholder="INGRESE EL R.U.C DEL VENDEDOR"
                  onChange={handleInputChange}
                  name="rucVendedor"
                  value={inputs.rucVendedor}
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-10 m-auto">
                <ImageSvg
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                  src={CodeBarsIcon}
                ></ImageSvg>
                <InputText
                  className="col-10 text-left"
                  type="text"
                  placeholder="CODIGO DE BARRAS"
                  name="codigoBarras"
                  onChange={handleInputChange}
                  value={inputs.codigoBarras}
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5 position-relative">
              <ContentInputText className="col-sm-10 m-auto py-5">
                <BFoodLabel className="col-6 mb-2" customSize="12pt">
                  IMAGEN DEL PRODUCTO (JPG O PNG)
                </BFoodLabel>
                <div className="col-6 d-flex justify-content-around align-items-center mb-1">
                  <CustomInputFile htmlFor="archivo" className="btn-subir">
                    SELECCIONE UN ARCHIVO
                  </CustomInputFile>
                  <FormFileStyled
                    id="archivo"
                    onChange={handleInputChange}
                    name="imagenProducto"
                    value={inputs.imagenProducto}
                  />
                </div>
              </ContentInputText>
            </FormGroup>
            <FormGroup className="text-center p-2 mt-4">
              <BtnSendData className="16rem">REGISTRAR</BtnSendData>
            </FormGroup>
          </FormRegisterProduct>
        </Row>
      </Container>
    </Fragment>
  );
}

export default RegisterProduct;
