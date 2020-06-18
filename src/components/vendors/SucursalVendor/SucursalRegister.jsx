import React from 'react';
import { Container, Row, FormGroup, Dropdown } from 'react-bootstrap';
import { FormRegisterProduct } from '../../ui/Forms';
import { BFoodSubTitle, BFoodTitle } from '../../ui/Texts';
import { ContentInputText, InputText } from '../../ui/Fields';

import Letter_icon from '../../../assets/img/signs.svg';
import { ImageSvg } from '../../ui/Images';
import Iframe from 'react-iframe';
import styled from '@emotion/styled';
import { BtnSendData, BtnBackData } from '../../ui/Buttons';
import FormCheckLabel from 'react-bootstrap/FormCheckLabel';
import FormCheckInput from 'react-bootstrap/FormCheckInput';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';
import { useState } from 'react';
import Clock from '../../../assets/img/Form/clock.svg';
import Map from '../../../assets/img/Form/map.svg';
const MapIframe = styled(Iframe)`
  border-radius: 27px;
`;
const CustomDropdownToggleForm = styled(Dropdown.Toggle)`
  background: white;
  width: 100%;
`;
const CustomDropdownMenuForm = styled(Dropdown.Menu)`
  width: 90%;
`;

export default function SucursalRegister() {
  const [clockValue, setClockValue] = useState(['10:00', '11:00']);
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
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  src={Letter_icon}
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                />
                <InputText
                  className="col-12 text-left"
                  type="text"
                  placeholder="NOMBRE DEL LOCAL"
                  name="name"
                />
              </ContentInputText>
            </FormGroup>

            <div className="d-flex">
              <ImageSvg
                src={Clock}
                customWidth="2.6rem"
                customHeight="2.6rem"
              />
              <h4 className="mt-2">Horario de atención</h4>
            </div>
            <div className="d-flex  ml-4">
              <FormGroup className="mr-5">
                <FormCheckInput id="lunes" />
                <FormCheckLabel for="lunes" className="font-weight-bolder ">
                  L
                </FormCheckLabel>
              </FormGroup>
              <FormGroup className="mr-5">
                <FormCheckInput id="martes" />
                <FormCheckLabel for="martes" className="font-weight-bolder">
                  M
                </FormCheckLabel>
              </FormGroup>
              <FormGroup className="mr-5">
                <FormCheckInput id="miercoles" />
                <FormCheckLabel for="miercoles" className="font-weight-bolder">
                  Mi
                </FormCheckLabel>
              </FormGroup>
              <FormGroup className="mr-5">
                <FormCheckInput id="jueves" />
                <FormCheckLabel for="jueves" className="font-weight-bolder">
                  J
                </FormCheckLabel>
              </FormGroup>

              <FormGroup className="mr-5">
                <FormCheckInput id="viernes" />
                <FormCheckLabel for="viernes" className="font-weight-bolder">
                  V
                </FormCheckLabel>
              </FormGroup>
            </div>
            <TimeRangePicker
              value={clockValue}
              onChange={setClockValue}
              amPmAriaLabel
            />
          </div>
          <div className="col-5 mr-5">
            <div>
              <ImageSvg src={Map} customWidth="2.6rem" customHeight="2.6rem" />
            </div>
            <h4 className="mt-3 ml-2">Localizacion del local</h4>
            <MapIframe
              class="iframe"
              src="https://maps.google.com/?ll=23.135249,-82.359685&z=14&t=m&output=embed"
              height="402"
              width="532"
              frameborder="0"
              // eslint-disable-next-line react/style-prop-object
              style="border:0"
              allowfullscreen
            ></MapIframe>
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
