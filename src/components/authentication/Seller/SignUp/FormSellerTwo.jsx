import React, { Fragment } from 'react';

import { Container, Row, FormGroup } from 'react-bootstrap';

import { FormSeller } from '../../../ui/Forms';

import { BFoodTitle, BFoodSubTitle } from '../../../ui/Texts';

import { ImageSvg } from '../../../ui/Images';

import { ContentInputText, InputText } from '../../../ui/Fields';

import { BtnSendData, BtnBackData } from '../../../ui/Buttons';

import './FormSellerTwo.positions.css';

import avatarImg from '../../../../assets/img/Form/avatar.svg';
import emailImg from '../../../../assets/img/Form/email.png';
import passwordImg from '../../../../assets/img/Form/pass_1.svg';
import passwordSecureImg from '../../../../assets/img/Form/pass_2.svg';

const FormSellerTwo = () => {
  return (
    <Fragment>
      <Container>
        <Row className="justify-content-center align-items-center p-2">
          <FormSeller customMaxWidth="45rem" className="col-sm-12 py-4 px-1">
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
                  src={avatarImg}
                />

                <InputText
                  className="col-10 text-left"
                  type="text"
                  placeholder="CREE UN USERNAME"
                />
              </ContentInputText>
            </FormGroup>

            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-10 m-auto">
                <ImageSvg
                  customWidth="2rem"
                  customHeight="2rem"
                  className="ml-1"
                  src={emailImg}
                />

                <InputText
                  className="col-10 text-left"
                  type="text"
                  placeholder="INGRESE SU EMAIL"
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-10 m-auto">
                <ImageSvg
                  customWidth="2rem"
                  customHeight="2rem"
                  className="ml-1"
                  src={passwordImg}
                />

                <InputText
                  className="col-10 text-left"
                  type="text"
                  placeholder="CREE UNA CONTRASEÑA"
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-10 m-auto">
                <ImageSvg
                  customWidth="2rem"
                  customHeight="2rem"
                  className="ml-1"
                  src={passwordSecureImg}
                />

                <InputText
                  className="col-10 text-left"
                  type="text"
                  placeholder="CONFIRME SU CONTRASEÑA"
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="btn-back">
              <BtnBackData customWidth="16rem">ANTERIOR</BtnBackData>
            </FormGroup>
            <FormGroup className="btn-next">
              <BtnSendData customWidth="16rem">CONTINUAR</BtnSendData>
            </FormGroup>
          </FormSeller>
        </Row>
      </Container>
    </Fragment>
  );
};

export default FormSellerTwo;
