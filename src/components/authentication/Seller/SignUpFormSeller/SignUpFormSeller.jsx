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
} from './SignUpFormSeller.styles';

import logoImg from '../../../../assets/img/scooter.svg';
import cardImg from '../../../../assets/img/card.svg';

import nameImg from '../../../../assets/img/letter.png';
import emailImg from '../../../../assets/img/email.png';
import addressImg from '../../../../assets/img/address.png';
import companyImg from '../../../../assets/img/company.png';
import worldImg from '../../../../assets/img/world.png';
import phoneImg from '../../../../assets/img/phone.png';

import { Link } from 'react-router-dom';

import { Container, FormGroup, FormControl } from 'react-bootstrap';

import {
  validFieldString,
  validFieldEmail,
} from '../../../../helpers/validations/formSellerValid';
import Swal from 'sweetalert2';

const SignUpFormSeller = () => {
  const [error, setError] = useState(true);
  const [errors, setErrors] = useState({
    nameError: {
      active: true,
      message: '',
    },
    rsocialError: {
      active: true,
      message: '',
    },
    rucError: {
      active: true,
      message: '',
    },
    emailError: {
      active: true,
      message: '',
    },
    addressError: {
      active: true,
      message: '',
    },
    urlWebError: {
      active: true,
      message: '',
    },
    phoneError: {
      active: true,
      message: '',
    },
  });

  const [vendor, setVendor] = useState({
    name: '',
    rsocial: '',
    ruc: '',
    email: '',
    address: '',
    urlWeb: '',
    phone: '',
  });

  const { name, rsocial, ruc, email, address, urlWeb, phone } = vendor;

  const validFields = (e) => {
    if (e.target.name === 'name') {
      const nameError = validFieldString(
        name,
        4,
        20,
        'El nombre referencial debe estar entre 4 y 20 caracteres'
      );
      setErrors({
        ...errors,
        nameError: nameError,
      });
      return;
    }

    if (e.target.name === 'rsocial') {
      const rsocialError = validFieldString(
        rsocial,
        1,
        100,
        'La razón social no debe estar vacía'
      );
      setErrors({
        ...errors,
        rsocialError: rsocialError,
      });
      return;
    }

    if (e.target.name === 'ruc') {
      const rucError = validFieldString(
        ruc,
        11,
        11,
        'El RUC debe ser de 11 dígitos'
      );
      setErrors({
        ...errors,
        rsocialError: rucError,
      });
      return;
    }

    if (e.target.name === 'email') {
      const emailError = validFieldEmail(email);
      setErrors({
        ...errors,
        rsocialError: emailError,
      });
      return;
    }

    if (e.target.name === 'address') {
      const addressError = validFieldString(
        address,
        4,
        100,
        'La dirección no es válida'
      );
      setErrors({
        ...errors,
        rsocialError: addressError,
      });
      return;
    }

    if (e.target.name === 'urlWeb') {
      const urlWebError = validFieldString(
        urlWeb,
        4,
        100,
        'La URL ingresada no es válida'
      );
      setErrors({
        ...errors,
        rsocialError: urlWebError,
      });
      return;
    }

    if (e.target.name === 'phone') {
      const phoneError = validFieldString(
        phone,
        4,
        20,
        'El teléfono no es válido'
      );
      setErrors({
        ...errors,
        rsocialError: phoneError,
      });
      return;
    }
  };

  const handleChange = (e) => {
    validFields(e);

    setVendor({
      ...vendor,
      [e.target.name]: e.target.value,
    });

    if (
      name.trim() === '' ||
      rsocial.trim() === '' ||
      ruc.trim() === '' ||
      ruc.trim().length < 10 ||
      email.trim() === '' ||
      address.trim() === '' ||
      phone.trim() === ''
    ) {
      setError(true);
    } else {
      setError(false);
    }

    // setTimeout(() => {
    //     if(errors.nameError.active    ||
    //        errors.rsocialError.active ||
    //        errors.rucError.active     ||
    //        errors.emailError.active   ||
    //        errors.addressError.active ||
    //        errors.urlWebError.active  ||
    //        errors.phoneError.active) {
    //          setError(true);
    //          console.log('true');
    //      } else {
    //         setError(false);
    //         console.log('false');
    //      }
    // }, 1000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError(false);

    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Su solicitud se envió correctamente',
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
              <IconInput src={nameImg} className="col-sm-2" />

              <FormControl
                name="name"
                type="text"
                value={name}
                onChange={handleChange}
                placeholder="INGRESE UN NOMBRE REFERENCIAL"
                className="col-sm-10 text-center"
                data-error="nameError"
              />

              {/* <div className="valid-feedback text-right pr-5">Success! You've done it.</div> */}
            </FormControlContent>

            <FormControlContent className="col-sm-10 mx-auto mt-3">
              <IconInput src={companyImg} className="col-sm-2" />

              <FormControl
                name="rsocial"
                type="text"
                value={rsocial}
                onChange={handleChange}
                placeholder="RAZ. SOCIAL DE SU NEGOCIO O EMPRESA"
                className="col-sm-10 text-center"
              />
            </FormControlContent>
          </FormGroup>

          <FormGroup>
            <FormControlContent className="col-sm-10 mx-auto">
              <IconInput src={cardImg} className="col-sm-2" />

              <FormControl
                name="ruc"
                type="number"
                value={ruc}
                onChange={handleChange}
                placeholder="INGRESE SU N° RUC: 11 dígitos"
                className="col-sm-10 text-center"
              />
            </FormControlContent>

            <FormControlContent className="col-sm-10 mx-auto mt-3">
              <IconInput src={emailImg} className="col-sm-2" />

              <FormControl
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="DIRECCIÓN DE CORREO ELECTRÓNICO"
                className="col-sm-10 text-center"
              />
            </FormControlContent>
          </FormGroup>

          <FormGroup>
            <FormControlContent className="col-sm-10 mx-auto">
              <IconInput src={addressImg} className="col-sm-2" />

              <FormControl
                name="address"
                type="text"
                value={address}
                onChange={handleChange}
                placeholder="DIRECCIÓN DE SU NEGOCIO"
                className="col-sm-10 text-center"
              />
            </FormControlContent>
          </FormGroup>

          <FormGroup>
            <FormControlContent className="col-sm-10 mx-auto">
              <IconInput src={worldImg} className="col-sm-2" />

              <FormControl
                name="urlWeb"
                type="url"
                value={urlWeb}
                onChange={handleChange}
                placeholder="DIRECCIÓN DE PÁGINA WEB (OPCIONAL)"
                className="col-sm-10 text-center"
              />
            </FormControlContent>

            <FormControlContent className="col-sm-10 mx-auto mt-3">
              <IconInput src={phoneImg} className="col-sm-2" />

              <FormControl
                name="phone"
                type="number"
                value={phone}
                onChange={handleChange}
                placeholder="N° CONTACTO ej: 987654321"
                className="col-sm-10 text-center"
              />
            </FormControlContent>
          </FormGroup>

          <FormGroup className="text-center mt-4">
            <BtnLogin
              disabled={error}
              className={error ? 'btn_null_pointer' : ''}
            >
              REGISTRARME
            </BtnLogin>
          </FormGroup>

          <p id="textSignUp">
            ¿Ya tiene una cuenta? &nbsp;
            <Link to="/vendor/signin">¡Quiero Ingresar!</Link>
          </p>
        </FormLoginSeller>
      </Container>
    </ContainerLogin>
  );
};

export default SignUpFormSeller;
