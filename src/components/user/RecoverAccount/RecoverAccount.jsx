import React from 'react';
import { Container, FormGroup } from 'react-bootstrap';
import { FormRegisterProduct } from '../../ui/Forms';
import { BFoodSubTitle, BFoodTitle } from '../../ui/Texts';
import { ContentInputText, InputText } from '../../ui/Fields';
import { BtnSendData } from '../../ui/Buttons';

export default function RecoverAccount() {
  return (
    <Container>
      <FormRegisterProduct>
        <div className="col-sm-12 d-flex justify-content-between align-items-center mt-2">
          <BFoodSubTitle customSize="18pt">Recuperar</BFoodSubTitle>
          <BFoodTitle className="ml-3">BFood</BFoodTitle>
          <BFoodSubTitle customSize="18pt">Cuenta</BFoodSubTitle>
        </div>
        <FormGroup>
          <ContentInputText>
            <InputText
              className="col-12 text-left"
              placeholder="CORREO ELECTRONICO"
            />
          </ContentInputText>
        </FormGroup>
        <div className="d-flex justify-content-end mt-2">
          <BtnSendData className="p-2">RECUPERAR</BtnSendData>
        </div>
      </FormRegisterProduct>
    </Container>
  );
}
