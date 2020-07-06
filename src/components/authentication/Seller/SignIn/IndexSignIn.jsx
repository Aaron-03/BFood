import React, { useContext, useState, useEffect } from 'react';
import VendorContext from '../../../../context/vendors/VendorContext';

import { Container, Row, FormGroup } from 'react-bootstrap';

import { FormSeller } from '../../../ui/Forms';

import { BFoodTitle, BFoodSubTitle } from '../../../ui/Texts';

import { ImageSvg } from '../../../ui/Images';

import { ContentInputText, InputText } from '../../../ui/Fields';

import { BtnSendData } from '../../../ui/Buttons';

import perfilImg from '../../../../assets/img/Form/avatar.svg';
import password1Img from '../../../../assets/img/Form/pass_1.svg';
import { validFieldString } from '../../../../helpers/validations/formSellerValid';
import Swal from 'sweetalert2';
import styled from '@emotion/styled';
import { ContentLoading } from '../../../ui/Containers';
import { useHistory } from 'react-router-dom';

const ContainerSignIn = styled.div`
  background-color: var(--custom-blue);
  height: 69vh;
  width: 100vw !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IndexSignIn = () => {
  const { crtVendor, currentVendor, sendRequest } = useContext(VendorContext);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sended, setSended] = useState(false);

  const [vendor, setVendor] = useState({
    ruc: '',
    password: '',
  });

  const { ruc, password } = vendor;

  const history = useHistory();

  if (currentVendor !== null) {
    history.push('/vendor/settings');
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const minCaracters = 4;

    const rucValid = validFieldString(ruc, 11, 11);
    const passwordValid = validFieldString(password, minCaracters, 27);

    if (rucValid.active) {
      Swal.fire({
        icon: 'error',
        title: 'El ruc ingresado no es válido',
        timer: '2000',
      });

      return;
    }

    if (passwordValid.active) {
      Swal.fire({
        icon: 'error',
        title: 'El password debe ser mínimo de 6 caracteres',
        timer: '2000',
      });

      return;
    }

    setLoading(true);

    crtVendor(vendor);

    setLoading(false);

    setError(false);
  };

  const handleChange = (e) => {
    setVendor({
      ...vendor,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ContainerSignIn>
      {loading ? (
        <ContentLoading>
          <div className="spinner-border text-primary"></div>
        </ContentLoading>
      ) : null}
      <Row className="justify-content-center align-items-center p-2 col-12">
        <FormSeller
          onSubmit={handleSubmit}
          customMaxWidth="45rem"
          className="col-sm-12 py-4 px-1"
        >
          <div className="col-sm-12 d-flex justify-content-between align-items-center mt-2">
            <BFoodSubTitle customSize="18pt">Único</BFoodSubTitle>

            <BFoodTitle className="ml-3">BFood</BFoodTitle>

            <BFoodSubTitle customSize="18pt">Especial</BFoodSubTitle>
          </div>

          <FormGroup className="mt-5">
            <ContentInputText className="col-sm-10 m-auto">
              <ImageSvg
                customWidth="2.6rem"
                customHeight="2.6rem"
                src={perfilImg}
              />

              <InputText
                className="col-10 text-left"
                type="text"
                placeholder="INGRESE SU N° RUC"
                name="ruc"
                value={ruc}
                onChange={handleChange}
              />
            </ContentInputText>
          </FormGroup>

          <FormGroup className="mt-5">
            <ContentInputText className="col-sm-10 m-auto">
              <ImageSvg
                customWidth="2rem"
                customHeight="2rem"
                className="ml-1"
                src={password1Img}
              />

              <InputText
                className="col-10 text-left"
                type="password"
                placeholder="INGRESE SU CONTRASEÑA"
                name="password"
                value={password}
                onChange={handleChange}
              />
            </ContentInputText>
          </FormGroup>

          <div className="row col-10 m-auto justify-content-around align-items-center py-2 px-0">
            <BtnSendData className="mt-2 col-5">INGRESAR</BtnSendData>
          </div>
        </FormSeller>
      </Row>
    </ContainerSignIn>
  );
};

export default IndexSignIn;
