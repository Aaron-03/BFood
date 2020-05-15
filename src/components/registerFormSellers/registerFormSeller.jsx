import React from 'react';
import {
  FormControl,
  Container,
  Button,
  FormFile,
  FormGroup,
} from 'react-bootstrap';

import { ReactComponent as Scooter } from '../../assets/scooter.svg';

import './registerFormSeller.css';
function RegisterFormSeller() {
  return (
    <Container className="body-registro-vendedor">
      <Scooter className="logo" />
      <h3 className="text-center titlo-registro-vendedor">
        Registro de vendedor
      </h3>
      <form>
        <FormGroup className="form-inline">
          <label className="label-registro-vendedor col-md-3" htmlFor="nombre">
            Nombre
          </label>
          <FormControl
            id="nombre"
            className="campo-registro-vendedor col-md-9"
            name="nombre"
            required
          />
        </FormGroup>
        <FormGroup className="form-inline">
          <label className="label-registro-vendedor col-md-3" htmlFor="correo">
            Correo
          </label>
          <FormControl
            id="Correo"
            className="campo-registro-vendedor col-md-9"
            name="Correo"
            type="email"
            required
          />
        </FormGroup>
        <FormGroup className="form-inline">
          <label
            className="label-registro-vendedor col-md-3"
            htmlFor="contrasenia"
          >
            Contraseña
          </label>
          <FormControl
            id="contrasenia"
            name="contrasenia"
            type="password"
            className="campo-registro-vendedor col-md-9"
            required
          />
        </FormGroup>
        <FormGroup className="form-inline">
          <label
            className="label-registro-vendedor col-md-3"
            htmlFor="razonSocial"
          >
            Razon Soc.
          </label>
          <FormControl
            id="razonSocial"
            className="campo-registro-vendedor col-md-9"
            name="razonSocial"
            required
          />
        </FormGroup>
        <FormGroup className="form-inline">
          <label className="label-registro-vendedor col-md-3" htmlFor="ruc">
            R.U.C
          </label>
          <FormControl
            id="ruc"
            className="campo-registro-vendedor col-md-9"
            name="ruc"
            required
          />
        </FormGroup>
        <FormGroup className="form-inline">
          <label
            className="label-registro-vendedor col-md-3"
            htmlFor="delivery"
          >
            Delivery
          </label>
          <FormControl
            id="delivery"
            className="campo-registro-vendedor col-md-9"
            name="delivery"
          />
        </FormGroup>
        <FormGroup className="form-inline">
          <label className="label-registro-vendedor col-md-3" htmlFor="pagWeb">
            Pag. web
          </label>
          <FormControl
            id="pagWeb"
            className="campo-registro-vendedor col-md-9"
            name="pagWeb"
          />
        </FormGroup>
        <FormGroup className="form-inline">
          <label
            className="label-registro-vendedor col-md-3"
            htmlFor="contacto"
          >
            Contacto
          </label>
          <FormControl
            id="contacto"
            className="campo-registro-vendedor col-md-9"
            name="contacto"
          />
        </FormGroup>
        <FormGroup className="form-inline">
          <label className="label-registro-vendedor col-md-3" htmlFor="logo">
            Logo
          </label>
          <FormFile
            id="logo"
            className="campo-registro-vendedor col-md-9"
            name="logo"
          />
        </FormGroup>
        <p className="text-center singUp-registro-vendedor">
          Si ya tienes una cuenta haga click <a>Aquí</a>
        </p>
        <Button className="btn-registrar-vendedor mx-auto ">REGISTRAR</Button>
      </form>
    </Container>
  );
}

export default RegisterFormSeller;
