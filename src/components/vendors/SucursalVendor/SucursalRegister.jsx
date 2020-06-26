import React, { useState } from 'react';
import { Container, Row, FormGroup, Spinner, FormCheck } from 'react-bootstrap';
import { FormRegisterProduct } from '../../ui/Forms';
import { BFoodSubTitle, BFoodTitle } from '../../ui/Texts';
import { ContentInputText, InputText } from '../../ui/Fields';
import Letter_icon from '../../../assets/img/signs.svg';
import { ImageSvg } from '../../ui/Images';
import styled from '@emotion/styled';
import { BtnSendData, BtnBackData } from '../../ui/Buttons';

import Map_svg from '../../../assets/img/Form/map.svg';
import Map from '../../map/Map';
import { useContext } from 'react';
import VendorContext from '../../../context/vendors/VendorContext';

let apiKey = 'AIzaSyCF9q_zmyp4svbjZcpId4XUcDSJnZDAUoQ';

const mapUrl = `http://maps.googleapis.com/maps/api/js?v=3.exp&key=${apiKey}`;

const ChecksHorario = styled(FormCheck)`
  margin-top: 20px;
  margin-left: -28px;
  margin-right: 25px;
`;

export default function SucursalRegister() {
  const { addSucursalVendor, marcador } = useContext(VendorContext);
  const [sucursal, setSucursal] = useState({
    direccion: '',
    lat: 0,
    lng: 0,
    apertura: '',
    cierre: '',
    horario: [],
  });
  // console.log(marcador[2]);
  const horarioAtencion = [
    'lunes',
    'martes',
    'miercoles',
    'jueves',
    'viernes',
    'sabado',
  ];
  const { direccion, lat, lng, apertura, cierre, horario } = sucursal;
  const handlerChangeInputs = (e) => {
    while (e.target.name.match(horarioAtencion)) {
      horario.push(e.target.name);
    }
    setSucursal({
      ...sucursal,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Container>
      <FormRegisterProduct>
        <div className="col-sm-12 d-flex justify-content-between align-items-center mt-2">
          <BFoodSubTitle customSize="18pt">Registro</BFoodSubTitle>
          <BFoodTitle className="ml-3">BFood</BFoodTitle>
          <BFoodSubTitle customSize="18pt">Productos</BFoodSubTitle>
        </div>
        <Row className="justify-content-center">
          <div className="col-5">
            <FormGroup className="mt-5">
              <label for="direccion">DIRECCIÓN DE REFERENCIA</label>
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  src={Letter_icon}
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                />
                <InputText
                  className="col-12 text-left"
                  type="text"
                  placeholder="REFERENCIA LOCAL"
                  id="direccion"
                  name="direccion"
                  value={direccion}
                  onChange={handlerChangeInputs}
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <label for="apertura">HORA DE APERTURA</label>
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  src={Letter_icon}
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                />
                <InputText
                  className="col-12 text-left"
                  type="time"
                  id="apertura"
                  name="apertura"
                  value={apertura}
                  onChange={handlerChangeInputs}
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <label for="cierre">HORA DE CIERRE</label>
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  src={Letter_icon}
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                />
                <InputText
                  className="col-12 text-left"
                  type="time"
                  id="cierre"
                  name="cierre"
                  value={cierre}
                  onChange={handlerChangeInputs}
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup>
              <span>HORARIO DE ATENCIÓN</span>
              <div className="d-flex mt-2">
                <label for="lunes">Lunes</label>
                <ChecksHorario id="lunes" name="lunes" />
                <label for="martes">Martes</label>
                <ChecksHorario id="martes" name="martes" />
                <label for="miercoles">Miercoles</label>
                <ChecksHorario id="miercoles" name="miercoles" />
                <label for="jueves">Jueves</label>
                <ChecksHorario id="jueves" name="jueves" />
                <label for="viernes">Viernes</label>
                <ChecksHorario id="viernes" name="viernes" />
                <label for="sabado">Sabado</label>
                <ChecksHorario id="sabado" name="sabado" />
              </div>
            </FormGroup>
          </div>
          <div className="col-5 mr-5">
            <div>
              <ImageSvg
                src={Map_svg}
                customWidth="2.6rem"
                customHeight="2.6rem"
              />
            </div>
            <h4 className="mt-3 ml-2">Localizacion del local</h4>
            <div className="rounded">
              <Map
                googleMapURL={mapUrl}
                containerElement={
                  <div
                    style={{
                      height: '400px',
                      width: '530px',
                      border: '2px solid',
                    }}
                    className="rounded"
                  />
                }
                mapElement={
                  <div style={{ height: '100%' }} className="rounded" />
                }
                loadingElement={<Spinner animation="border" />}
              />
              {console.log(marcador)}
            </div>
          </div>
        </Row>
        <div className="d-flex justify-content-end mt-2">
          <BtnBackData className="btn btn-danger mr-2">CANCELAR</BtnBackData>
          <BtnSendData>REGISTRAR</BtnSendData>
        </div>
      </FormRegisterProduct>
    </Container>
  );
}
