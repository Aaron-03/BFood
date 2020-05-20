import React from 'react';

import Sport from '../../../../assets/img/sport.svg';

import { Container } from 'react-bootstrap';

import {
  BFoodTitle,
  VendorTitle,
  TItleOfContent,
  TItleOfContent2,
  BFoodVendorDescription,
  DeliveryLogo,
  BtnContinuar,
  FirstPageSellerContainer,
  InformationContainer,
} from './FirstPageSeller.styles';

function FirstPageForSeller(props) {
  return (
    <FirstPageSellerContainer>
      <InformationContainer>
        <BFoodTitle>BFood</BFoodTitle>
        <VendorTitle>Vendors</VendorTitle>
        <TItleOfContent>¡Bienvenido!</TItleOfContent>
        <BFoodVendorDescription>
          BFood, es una nueva forma de enviar alimentos de forma salubre y
          brinda la oportunidad de mantener la continuidad de su negocio. Todo
          gestionado a travéz de nuestro panel de administración personalizado.
        </BFoodVendorDescription>
        <TItleOfContent2>ÚNETE A ESTA NUEVA INICIATIVA</TItleOfContent2>
        <DeliveryLogo src={Sport}></DeliveryLogo>
        <BtnContinuar>CONTINUAR</BtnContinuar>
      </InformationContainer>
    </FirstPageSellerContainer>
  );
}

export default FirstPageForSeller;
