import React, { useState } from 'react';

import {
  ContainerLogin,
  FormLoginSeller,
  LabelsForms,
  TitleLogo,
  ImageLogo,
  ImageLogoImg,
  FormControlContent,
  IconInput,
  BtnLogin,
  FooterLogin,
} from './LoginFormSeller.styles';

import logoImg from '../../../../assets/img/scooter.svg';
import cardImg from '../../../../assets/img/card.svg';
import keyImg from '../../../../assets/img/door-key.svg';

import { Link } from 'react-router-dom';

import { Container, FormGroup, FormControl } from 'react-bootstrap';

import Swal from 'sweetalert2';

const LoginFormSeller = () => {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState(false);
  const [vendor, setVendor] = useState({
    username: '',
    password: '',
  });

  const { username, password } = vendor;

  const handleChange = (e) => {
    setVendor({
      ...vendor,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === '' || password.trim() === '') {
      setError(true);

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Todos los campos son obligatorios',
        showConfirmButton: false,
      });
      return;
    }

    setError(false);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Ha ingresado correctamente',
      showConfirmButton: false,
      timer: 2000,
    });
  };

  return (
    <ContainerLogin>
      <Container>
        <FormLoginSeller onSubmit={handleSubmit} className="col-md-7">
          <div className="d-flex justify-content-center">
            <ImageLogo>
              <ImageLogoImg src={logoImg} alt="" />
            </ImageLogo>
          </div>

          <LabelsForms>
            <label>ÚNICO</label>
            <label>ESPECIAL</label>
          </LabelsForms>

          <TitleLogo>BFood</TitleLogo>

          <FormGroup>
            <FormControlContent className="col-sm-10 mx-auto">
              <IconInput id="cardImgId" src={cardImg} className="col-sm-2" />

              <FormControl
                name="email"
                type="email"
                value={username}
                onChange={handleChange}
                placeholder="INGRESE SU RUC O EMAIL"
                className="col-sm-10 text-center"
              />
            </FormControlContent>

            <FormControlContent className="col-sm-10 mx-auto mt-3">
              <IconInput id="keyImgId" src={keyImg} className="col-sm-2" />

              <FormControl
                name="email"
                type="email"
                value={password}
                onChange={handleChange}
                placeholder="INGRESE SU PASSWORD"
                className="col-sm-10 text-center"
              />
            </FormControlContent>
          </FormGroup>

          <FormGroup className="text-center mt-4">
            <BtnLogin>INGRESAR</BtnLogin>
          </FormGroup>

          <p id="textSignUp">
            ¿Aún no tiene una cuenta? &nbsp;
            <Link to="/vendor/signup">Regístrece</Link>
          </p>
        </FormLoginSeller>
      </Container>

      <FooterLogin>
        <a href="/vendor/signin">
          No puede ingresar? <span>Comuníquese con nosotros</span>
        </a>
      </FooterLogin>
    </ContainerLogin>
  );
};

export default LoginFormSeller;
