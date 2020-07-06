import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';
import { BFoodSubTitle, BFoodTitle } from '../../ui/Texts';
import {
  Container,
  Row,
  FormGroup,
  FormControl,
  FormCheck,
} from 'react-bootstrap';
import { ContentInputText, InputText } from '../../ui/Fields';
import { ImageSvg } from '../../ui/Images';
import { BtnBackData, BtnSendData } from '../../ui/Buttons';
import Avatar from '../../../assets/img/Form/avatar.svg';
import Phone from '../../../assets/img/Form/phone.svg';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import Pass1 from '../../../assets/img/Form/pass_1.svg';
import Pass2 from '../../../assets/img/Form/pass_2.svg';
import Email from '../../../assets/img/Form/communications.svg';
import CostumerContext from '../../../context/costumer/CostumerContext';
const ContainerRegisterCostumer = styled(Container)`
  padding: 1rem;
  min-width: 20rem;
  max-width: ${(props) => (props.customMaxWidth ? props.customMaxWidth : '')};
  height: auto;
  background-color: var(--custom-white);
  border-radius: 27px;
  margin: auto;
`;
const UpdateCustomer = (props) => {
  const { updCostumer } = useContext(CostumerContext);

  const [costumer, setCostumer] = useState({
    nombres: '',
    apellidos: '',
    fechanac: '',
    dni: '',
    sexo: '',
    usuario: {},
  });
  const [usuario, setUsuario] = useState({
    username: '',
    email: '',
    password: '',
    estado: 0,
    roles: [{ rolNombre: '2' }],
  });
  const { username, email, password } = usuario;
  const { nombres, apellidos, fechanac, sexo, dni } = costumer;
  const handleChangeInputs = (e) => {
    setCostumer({
      ...costumer,
      [e.target.name]: e.target.value,
    });
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const handlerSubmitRegister = (e) => {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let emailConfirmacion = document.getElementById('confirmEmail').value;
    if (email !== emailConfirmacion) {
      Swal.fire({
        title: 'El coreo debe ser el mismo',
        timer: 2000,
      });
    }
    let password = document.getElementById('password').value;
    let passwordConfirmacion = document.getElementById('confirmPassword').value;
    if (password !== passwordConfirmacion) {
      Swal.fire({
        title: 'La contraseña debe ser la mismo',
        timer: 2000,
      });
    }
    if (
      nombres.trim() === '' ||
      apellidos.trim() === '' ||
      fechanac.trim() === '' ||
      dni.trim() === '' ||
      sexo.trim() === ''
    ) {
      Swal.fire({
        title: 'Ingrese datos válidos',
        timer: 2000,
      });
      return;
    }
    if (
      username.trim() === '' ||
      password.trim() === '' ||
      email.trim() === ''
    ) {
      Swal.fire({
        title: 'Ingrese datos válidos',
        timer: 2000,
      });
      return;
    }
    const xusuario = {
      username: username,
      password: password,

      email: email,
      estado: 0,
      roles: [{ rolNombre: '2' }],
    };
    const xcostumer = {
      nombres: nombres,
      apellidos: apellidos,
      fechanac: fechanac,
      dni: dni,
      sexo: sexo,
      usuario: xusuario,
    };
    console.log(xcostumer);
    updCostumer(xcostumer);
    Swal.fire({
      icon: 'success',
      title: 'Usuario actualizado',
      timer: 2000,
    });
  };
  return (
    <Fragment>
      <ContainerRegisterCostumer onSubmit={handlerSubmitRegister}>
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
                  name="nombres"
                  value={nombres}
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
                  name="apellidos"
                  value={apellidos}
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
                <div className="mb-4">
                  <span>FECHA DE NACIMIENTO</span>
                  <FormControl
                    type="date"
                    value={fechanac}
                    onChange={handleChangeInputs}
                    name="fechanac"
                  />
                </div>
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
                  placeholder="DNI"
                  maxLength="8"
                  type="number"
                  name="dni"
                  value={dni}
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
                <div className="mt-1">
                  <span className="mb-3">SEXO</span>
                  <div className="d-flex text-left">
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
              </ContentInputText>
            </FormGroup>
          </div>
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
                  placeholder="NICKNAME"
                  name="username"
                  value={username}
                  onChange={handleChangeInputs}
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
                <InputText
                  className="col-12 text-left"
                  id="email"
                  name="email"
                  placeholder="EMAIL"
                  value={email}
                  onChange={handleChangeInputs}
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
                <InputText
                  className="col-12 text-left"
                  id="confirmEmail"
                  name="confirmEmail"
                  placeholder="CONFIRMAR EMAIL"
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
                  name="password"
                  type="password"
                  placeholder="CONTRASEÑA"
                  id="password"
                  value={password}
                  onChange={handleChangeInputs}
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  src={Pass2}
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                />
                <InputText
                  className="col-12 text-left"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="CONFIRMAR CONTRASEÑA"
                />
              </ContentInputText>
            </FormGroup>
          </div>
        </Row>
        <div className="d-flex justify-content-end mt-2">
          <BtnSendData>REGISTRAR</BtnSendData>
        </div>
      </ContainerRegisterCostumer>
    </Fragment>
  );
};

export default UpdateCustomer;
