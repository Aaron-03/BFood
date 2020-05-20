import { Image } from 'react-bootstrap';

import styled from '@emotion/styled';

const BFoodTitle = styled.h1`
  color: #ffffff;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #f74545;
  top: 27px;
  width: 115px;
  height: 47px;
  left: 185px;
  font-size: 45px;
  letter-spacing: 0.28em;
  position: absolute;
  text-align: center;
  display: flex;
  align-items: center;
  line-height: 32px;
`;

const VendorTitle = styled.h1`
  position: absolute;
  color: #000000;
  height: 41px;
  left: 400px;
  top: 27px;
  font-size: 45px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.28em;
`;
const TItleOfContent = styled.h3`
  position: absolute;
  display: flex;
  letter-spacing: 0.28em;
  font-weight: bold;
  width: 238px;
  height: 28px;
  left: 52px;
  top: 100px;
`;
const BFoodVendorDescription = styled.p`
  position: absolute;
  width: 479px;
  height: 89px;
  left: 102px;
  top: 147px;
  letter-spacing: 0.15em;
  line-height: 150%;
`;
const TItleOfContent2 = styled.h3`
  position: absolute;
  display: flex;
  letter-spacing: 0.28em;
  font-weight: bold;
  width: 685px;
  height: 41px;
  left: 155px;
  top: 289px;
`;
const DeliveryLogo = styled(Image)`
  width: 94px;
  height: 87px;
  left: 385px;
  top: 345px;
  position: absolute;
`;
const BtnContinuar = styled.button`
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 12px;
  background: #5578ac;
  position: absolute;
  width: 257px;
  height: 45px;
  color: white;
  left: 300px;
  top: 460px;
  text-align: center;
  align-items: center;
  letter-spacing: 0.12em;
  font-weight: bold;
`;
const FirstPageSellerContainer = styled.div`
  position: relative;
  width: 1366px;
  height: 768px;

  background: #5578ac;
`;
const InformationContainer = styled.div`
  position: absolute;
  width: 683px;
  height: 495px;
  left: 342px;
  top: 174px;

  background: #ffffff;
  border: 3px solid #000000;
  box-sizing: border-box;
  border-radius: 27px;
`;
export {
  BFoodTitle,
  VendorTitle,
  TItleOfContent,
  BFoodVendorDescription,
  TItleOfContent2,
  DeliveryLogo,
  BtnContinuar,
  FirstPageSellerContainer,
  InformationContainer,
};
