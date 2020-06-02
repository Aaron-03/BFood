import React from 'react';
import styled from '@emotion/styled';
import { Image } from 'react-bootstrap';

import Hamburger_img from '../../../assets/img/Products/burguer.jpg';
import Star_Empty from '../../../assets/img/Products/star_full.svg';

export default function Product(props) {
  const ImageProduct = styled.div`
    background-image: url(${Hamburger_img});
    background-size: 100%;
    width: 308px;
    height: 230px;
    border-radius: 10px;
    margin-bottom: 20px;
  `;
  const TagProduct = styled.span`
    background: #ff8282;
    border-radius: 25px;
    padding: 5px 10px;
    float: right;
    margin-top: -65%;
    margin-right: 14%;
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
    width: 87%;
    padding: 0 10px;
    margin-top: -36%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  `;
  const Price = styled.p`
    margin-top: -25px;
    margin-left: 65%;
    font-size: 20px;
  `;
  let estrellasInCard = [];
  for (let i = 0; i < props.Estrellas; i++) {
    estrellasInCard.push(<CustomStar key={i} src={Star_Empty} />);
  }
  return (
    <div className="">
      <React.StrictMode>
        <ImageProduct />

        <TagProduct className="text-white">{props.Categoria}</TagProduct>

        <ProductCard class="">
          <h4 className="text-white font-weight-bold">{props.Titulo}</h4>
          <ProductLittleDesc className="text-white">
            {props.Descripcion}
          </ProductLittleDesc>

          <div>{estrellasInCard}</div>

          <Price className="text-white font-weight-bold mr-4">
            S./{props.Precio}
          </Price>
        </ProductCard>
      </React.StrictMode>
    </div>
  );
}
