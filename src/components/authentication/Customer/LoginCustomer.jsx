import React, { Fragment, useState } from 'react';
import { FormSeller } from '../../ui/Forms';
import { BtnSendData } from '../../ui/Buttons';
import { FormGroup, Row, Modal } from 'react-bootstrap';
import { BFoodSubTitle, BFoodTitle } from '../../ui/Texts';
import { ContentInputText, InputText } from '../../ui/Fields';

import { ImageSvg } from '../../ui/Images';
import perfilImg from '../../../assets/img/Form/avatar.svg';
import password1Img from '../../../assets/img/Form/pass_1.svg';

import styled from '@emotion/styled';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import CostumerContext from '../../../context/costumer/CostumerContext';
import { useHistory } from 'react-router-dom';
import RecoverAccount from './RecoverAccount/RecoverAccount';

const ContainerSignIn = styled.div`
  background-color: var(--custom-blue);
  height: 69vh;
  width: 100vw !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LinkRecoverAccount = styled.span`
  margin-left: 40%;
  &:hover {
    cursor: pointer;
  }
`;
const LoginCustomer = (props) => {
  const [show, setShow] = useState(false);
  const handlerClose = () => setShow(false);
  const handlerShow = () => setShow(true);
  const { lgnCostumer, login } = useContext(CostumerContext);
  const history = useHistory();

  const [loginCustomer, setLoginCustomer] = useState({
    username: '',
    password: '',
  });

  const { username, password } = loginCustomer;
  const handlerFieldChange = (e) => {
    setLoginCustomer({
      ...loginCustomer,
      [e.target.name]: e.target.value,
    });
  };

  const handlerSubmit = (e) => {
    e.preventDefault();

    if (username.trim() === '' || username.trim() === '') {
      Swal.fire({
        icon: 'error',
        title: 'Ingrese datos validos',
        timer: 2000,
      });
    }

    const xloginuser = {
      username: username,
      password: password,
    };

    console.log(xloginuser);
    lgnCostumer(xloginuser);

    history.push('/');
  };

  const handleClickSendVendor = (option) => {

    if(option === 'login') {
      history.push('/vendor/signin');
    } else {
      history.push('/vendor/signup');
    }
  }




  return (
    <Fragment>
      <ContainerSignIn>
        <Row className="justify-content-center align-items-center p-2 col-12">
          <FormSeller
            onSubmit={handlerSubmit}
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
                  placeholder="INGRESE SU USUARIO"
                  value={username}
                  name="username"
                  onChange={handlerFieldChange}
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
                  value={password}
                  onChange={handlerFieldChange}
                  name="password"
                />
              </ContentInputText>
            </FormGroup>
            <LinkRecoverAccount
              onClick={handlerShow}
              className="text-primary text-center"
            >
              Recuperar la cuenta
            </LinkRecoverAccount>
            <div className="row col-10 m-auto justify-content-around align-items-center py-2 px-0">
              <BtnSendData className="mt-2 col-5">INGRESAR</BtnSendData>
            </div>
          </FormSeller>
        </Row>
      </ContainerSignIn>

      <div className="text-center">
        Quieres vender en BFood ?

        <button
          type="button"
          onClick={() => handleClickSendVendor("login")}
          className="btn btn-link"
        >Ingresar</button>

        <button
          type="button"
          onClick={() => handleClickSendVendor("login")}
          className="btn btn-link"
        >Registrarme</button>
      </div>
    </Fragment>
  );
};

export default LoginCustomer;
