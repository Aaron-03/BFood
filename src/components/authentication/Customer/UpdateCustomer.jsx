import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import { FormRegisterProduct } from '../../ui/Forms';
import { BFoodSubTitle, BFoodTitle } from '../../ui/Texts';
import { Container, Row, FormGroup } from 'react-bootstrap';
import { ContentInputText, InputText } from '../../ui/Fields';
import { ImageSvg } from '../../ui/Images';
import { BtnBackData, BtnSendData } from '../../ui/Buttons';
import Avatar from '../../../assets/img/Form/avatar.svg';
import Phone from '../../../assets/img/Form/phone.svg';
import Swal from 'sweetalert2';
const ContainerRegisterCostumer = styled(Container)`
  height: 69vh;
  width: 200vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpdateCustomer = (props) => {
  const [costumer, setCostumer] = useState({
    id: 0,
    name: '',
    lastname: '',
    address: '',
    phone: '',
    dni: '',
  });
  const { name, lastname, address, phone, dni, id } = costumer;
  const handleChangeInputs = (e) => {
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
      id: 1,
      name: name,
      lastname: lastname,
      address: address,
      phone: phone,
      dni: '',
    };
    console.log(xcostumer);
  };
  return (
    <Fragment>
      <ContainerRegisterCostumer>
        <FormRegisterProduct onSubmit={handlerSubmitRegister}>
          <div className="col-sm-12 d-flex justify-content-between align-items-center mt-2">
            <BFoodSubTitle customSize="18pt">Actualizar</BFoodSubTitle>
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
            </div>
          </Row>
          <div className="d-flex justify-content-end mt-2">
            <BtnBackData className="btn btn-danger mr-2">SALIR</BtnBackData>
            <BtnSendData>REGISTRAR</BtnSendData>
          </div>
        </FormRegisterProduct>
      </ContainerRegisterCostumer>
    </Fragment>
  );
};

export default UpdateCustomer;
