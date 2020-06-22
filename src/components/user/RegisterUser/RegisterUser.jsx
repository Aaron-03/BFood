import React from 'react';
import {
  Container,
  Row,
  FormGroup,
  FormControl,
  FormCheck,
} from 'react-bootstrap';
import { FormRegisterProduct } from '../../ui/Forms';
import { BFoodSubTitle, BFoodTitle, BFoodLabel } from '../../ui/Texts';
import { ContentInputText, InputText, InputFile } from '../../ui/Fields';
import styled from '@emotion/styled';
import { BtnSendData, BtnClose, BtnBackData } from '../../ui/Buttons';
import Avatar from '../../../assets/img/Form/avatar.svg';
import Phone from '../../../assets/img/Form/phone.svg';
import Pass1 from '../../../assets/img/Form/pass_1.svg';
import Pass2 from '../../../assets/img/Form/pass_2.svg';
import Email from '../../../assets/img/Form/communications.svg';
import { ImageSvg } from '../../ui/Images';
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
const ImageName = styled.p`
  position: absolute;
  width: 100%;
  padding: 0.2rem;
  text-align: center;
  left: 0rem;
  bottom: -1rem;
`;
export default function RegisterUser() {
  return (
    <Container>
      <FormRegisterProduct>
        <div className="col-sm-12 d-flex justify-content-between align-items-center mt-2">
          <BFoodSubTitle customSize="18pt">Registro</BFoodSubTitle>
          <BFoodTitle className="ml-3">BFood</BFoodTitle>
          <BFoodSubTitle customSize="18pt">Cliente</BFoodSubTitle>
        </div>
        <Row className="justify-content-center">
          <div className="col-5">
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  src={Avatar}
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                />
                <InputText className="col-12 text-left" placeholder="NOMBRES" />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  src={Avatar}
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                />
                <InputText
                  className="col-12 text-left"
                  placeholder="APELLIDO MATERNO"
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  src={Avatar}
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                />
                <InputText
                  className="col-12 text-left"
                  placeholder="APELLIDO PARTERNO"
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  src={Phone}
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                />
                <InputText
                  className="col-12 text-left"
                  placeholder="TELEFONO"
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  src={Pass1}
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                />
                <InputText
                  className="col-12 text-left"
                  placeholder="CONTRASEÑA"
                />
              </ContentInputText>
            </FormGroup>
          </div>
          <div className="col-5">
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  src={Pass2}
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                />
                <InputText
                  className="col-12 text-left"
                  placeholder="CONFIRMAR CONTRASEÑA"
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  src={Email}
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                />
                <InputText className="col-12 text-left" placeholder="EMAIL" />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  src={Email}
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                />
                <InputText
                  className="col-12 text-left"
                  placeholder="CONFIRMAR EMAIL"
                />
              </ContentInputText>
            </FormGroup>
            <span>FECHA DE NACIMIENTO</span>
            <div className="d-flex">
              <FormControl type="number" maxlength="2" placeholder="DÍA" />
              <FormControl type="number" maxlength="2" placeholder="MES" />
              <FormControl type="number" maxlength="4" placeholder="AÑO" />
            </div>
            <div className="mt-3">
              <span className="mb-3">SEXO</span>
              <div className="d-flex">
                <FormCheck type="radio" />
                <label className="mr-3">Hombre</label>
                <FormCheck type="radio" />
                <label>Mujer</label>
              </div>
            </div>
          </div>
        </Row>
        <div className="d-flex justify-content-end mt-2">
          <BtnBackData className="btn btn-danger mr-2">SALIR</BtnBackData>
          <BtnSendData>REGISTRAR</BtnSendData>
        </div>
      </FormRegisterProduct>
    </Container>
  );
}
