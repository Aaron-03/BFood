import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Image } from 'react-bootstrap';

import Hamburger_img from '../../../assets/img/Products/burguer.jpg';
import Star_Empty from '../../../assets/img/Products/star_full.svg';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const ContentProduct = styled.div`
  position: relative;
  background-color: transparent;
  width: 24rem;
  height: 15rem;
  border-radius: 1rem;
  overflow: hidden;
  margin-right: 2.5rem;
  margin-top: 2rem;

  &:hover > button {
    z-index: 4;
  }

  &:nth-last-of-type() {
    margin-right: 0rem;
  }
`;

const BtnAddSale = styled.button`
  position: absolute;
  top: 6rem;
  right: 1rem;
  background-color: var(--custom-red);
  color: white;
  font-size: 24pt;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  padding-bottom: 0.5rem;
  box-shadow: 0px 0px 5px white;
  transition: all 0.4s;
  z-index: -1;

  &:hover {
    transform: scale(1.2);
    box-shadow: 0px 0px 8px white;
  }
`;

const ImageProduct = styled.div`
    /* background-image: url(${Hamburger_img});
    background-size: 100%; */
    position: absolute;
    width: 100%;
    height: 100%;
    transition: 0.4s all;

    img {
      width: 100%;
      height: 100%;
    }

    &:hover {
      transform: scale(1.2);
    }

  `;

const TagProduct = styled.span`
  background: #ff8282;
  border-radius: 25px;
  padding: 0.2rem 0.5rem;
  opacity: 0.99;
`;

const CustomStar = styled(Image)`
  width: 16px;
`;

const ProductLittleDesc = styled.p`
  overflow-wrap: break-word;
  padding: 0px;
  margin: 0px;
`;

const ProductCard = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  bottom: 0px;
  width: 100%;
`;

const Price = styled.span`
  font-size: 12.5pt;
  color: white;
`;

export default function Product({ product, pedido, setCantProd }) {
  const {
    id,
    img,
    estrellas,
    descripcion,
    precio,
    nombre,
    categoria,
  } = product;

  const [include, setInclude] = useState(false);

  const [item, setItem] = useState({
    id: id,
    precio: precio,
    nombre: nombre,
    cantidad: 1,
  });

  const { cantidad } = item;

  let estrellasInCard = [];

  for (let i = 0; i < estrellas; i++) {
    estrellasInCard.push(<CustomStar key={i} src={Star_Empty} />);
  }

  const handleClickAddSale = (product) => {
    setInclude(true);
    let cant = cantidad + 1;

    setItem({
      ...item,
      cantidad: cant,
    });

    if(!pedido.products.find(prod => prod.id === product.id)) {
      pedido.products = [...pedido.products, item];
    }
    
    const prodsIncludes = pedido.products.map(prod => prod.id === product.id ? item : prod);

    pedido.products = prodsIncludes;

    setCantProd(pedido.products.length);
  };


  return (
    <ContentProduct>
      <BtnAddSale
        type="button"
        onClick={() => handleClickAddSale(product)}
        title="AGREGAR AL CARRITO"
      >+</BtnAddSale>

      <Link to="/" className="text-decoration-none">
        <ImageProduct>
          <img src={Hamburger_img} alt="" />
        </ImageProduct>

        <div className="py-2 px-3 mt-1 text-right">
          <TagProduct className="text-white">{categoria}</TagProduct>
        </div>

        <ProductCard className="">
          <h4 className="text-white font-weight-bold">{nombre}</h4>
          <ProductLittleDesc className="text-white">
            {descripcion}
          </ProductLittleDesc>

          <div className="d-flex justify-content-between align-items-center p-1">
            <div>{estrellasInCard}</div>

            <Price>S./{precio}</Price>
          </div>
        </ProductCard>
      </Link>
    </ContentProduct>
  );
}
