import React from 'react';
import styled from '@emotion/styled';
import { Image } from 'react-bootstrap';

import Hamburger_img from '../../../assets/img/Products/burguer.jpg';
import Star_Empty from '../../../assets/img/Products/star_full.svg';

export default function Product() {
  const ImageProduct = styled.div`
    background-image: url(${Hamburger_img});
    background-size: 100%;
    width: 308px;
    height: 230px;
    border-radius: 10px;
  `;
  const TagProduct = styled.span`
    background: #ff8282;
    border-radius: 25px;
    padding: 5px 10px;
    float: right;
    margin-top: -22%;
    margin-right: 68%;
    opacity: 0.8;
  `;
  const CustomStar = styled(Image)`
    width: 16px;
  `;
  const ProductLittleDesc = styled.p`
    width: 98%;
  `;
  const ProductCard = styled.div`
    background: rgba(0, 0, 0, 0.5);
    width: 32.5%;
    padding: 0 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    margin-top: -14%;
  `;
  const Price = styled.p`
    margin-top: -25px;
    margin-left: 65%;
    font-size: 20px;
  `;
  return (
    <div>
      <React.StrictMode>
        {/*<ImageProduct loading src={Hamburger_img} />*/}
        <ImageProduct />
        <TagProduct className="text-white">Hamburgesa</TagProduct>

        <ProductCard class="">
          <h4 className="text-white font-weight-bold">HAMBURGUESA 2X1</h4>
          <ProductLittleDesc className="text-white">
            Hambueguesa hecha con la mejor carne y vegetales que lo conforman.
          </ProductLittleDesc>
          <div>
            <CustomStar src={Star_Empty} />
            <CustomStar src={Star_Empty} />
            <CustomStar src={Star_Empty} />
            <CustomStar src={Star_Empty} />
            <CustomStar src={Star_Empty} />
          </div>

          <Price className="text-white font-weight-bold mr-4">s/ 9.99</Price>
        </ProductCard>
      </React.StrictMode>
    </div>
  );
}
