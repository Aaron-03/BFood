import React, { Fragment, useState } from 'react';
import {
  Container,
  Row,
  FormGroup,
  FormControl,
  FormCheck,
} from 'react-bootstrap';
import { FormRegisterProduct } from '../../../ui/Forms';
import { BFoodSubTitle, BFoodTitle } from '../../../ui/Texts';
import { ContentInputText, InputText } from '../../../ui/Fields';
import styled from '@emotion/styled';
import { BtnSendData, BtnBackData } from '../../../ui/Buttons';
import Avatar from '../../../../assets/img/Form/avatar.svg';
import Phone from '../../../../assets/img/Form/phone.svg';
import Pass1 from '../../../../assets/img/Form/pass_1.svg';
import Pass2 from '../../../../assets/img/Form/pass_2.svg';
import Email from '../../../../assets/img/Form/communications.svg';
import { ImageSvg } from '../../../ui/Images';
import { useContext } from 'react';
import CostumerContext from '../../../../context/costumer/CostumerContext';
import Swal from 'sweetalert2';
const ContainerRegisterCostumer = styled(Container)`
  background-color: var(--custom-blue);
  height: 69vh;
  width: 200vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function RegisterCostumer(props) {
  const { addCostumer } = useContext(CostumerContext);
  const [costumer, setCostumer] = useState({
    name: '',
    lastname: '',
    address: '',
    phone: '',
    dni: '',
  });
  const { name, lastname, address, phone, dni } = costumer;
  const handleChangeInputs = (e) => {
    // if (e.target.value === 'Hombre' || e.target.value === 'Mujer') {
    //   setCostumer({
    //     ...costumer,
    //     [e.target.name]: e.target.value,
    //   });
    // }
    setCostumer({
      ...costumer,
      [e.target.name]: e.target.value,
    });
  };
  const handlerSubmitRegister = (e) => {
    e.preventDefault();
    if (
      name.trim() === '' ||
      lastname.trim() === '' ||
      address.trim() === '' ||
      phone.trim() === ''
    ) {
      Swal.fire({
        title: 'Ingrese datos válidos',
        timer: 2000,
      });
      return;
    }
    const xcostumer = {
      name: name,
      lastname: lastname,
      address: address,
      phone: phone,
      dni: '',
    };
    console.log(xcostumer);
    addCostumer(xcostumer);
  };
  return (
    <Fragment>
      <ContainerRegisterCostumer>
        <FormRegisterProduct onSubmit={handlerSubmitRegister}>
          <div className="col-sm-12 d-flex justify-content-between align-items-center mt-2">
            <BFoodSubTitle customSize="18pt">Registro</BFoodSubTitle>
            <BFoodTitle className="ml-3">BFood</BFoodTitle>
            <BFoodSubTitle customSize="18pt">Cliente</BFoodSubTitle>
          </div>
          <Row className="justify-content-center">
            <div className="col-5 mr-5">
              <FormGroup className="mt-5">
                <ContentInputText className="col-sm-12 m-auto">
                  <ImageSvg
                    src={Avatar}
                    customWidth="2.6rem"
                    customHeight="2.6rem"
                  />
                  <InputText
                    className="col-12 text-left"
                    placeholder="NOMBRES"
                    name="name"
                    value={name}
                    onChange={handleChangeInputs}
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
                    placeholder="APELLIDOS"
                    name="lastname"
                    value={lastname}
                    onChange={handleChangeInputs}
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
                    placeholder="DIRECCION"
                    name="address"
                    value={address}
                    onChange={handleChangeInputs}
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
                    name="phone"
                    value={phone}
                    onChange={handleChangeInputs}
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
                    name="password"
                    type="password"
                  />
                </ContentInputText>
              </FormGroup>
            </div>
            <div className="col-5 mr-5">
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
                    type="password"
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
                <ContentInputText className="col-sm-12 m-auto">
                  <FormControl type="date" name="fechaNacimiento" />
                </ContentInputText>
              </div>
              <div className="mt-3">
                <span className="mb-3">SEXO</span>
                <div className="d-flex">
                  <FormCheck
                    type="radio"
                    name="sexo"
                    value="Hombre"
                    onChange={handleChangeInputs}
                  />
                  <label className="mr-3">Hombre</label>
                  <FormCheck
                    type="radio"
                    name="sexo"
                    value="Mujer"
                    onChange={handleChangeInputs}
                  />
                  <label>Mujer</label>
                </div>
              </div>
            </div>
          </Row>
          <div className="d-flex justify-content-end mt-2">
            <BtnSendData>REGISTRAR</BtnSendData>
          </div>
        </FormRegisterProduct>
      </ContainerRegisterCostumer>
    </Fragment>
  );
}
