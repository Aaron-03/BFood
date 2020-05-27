import React from 'react';
import Product from './Product';
import styled from '@emotion/styled';

export default function ListProducts() {
  const ListProductContainer = styled.div`
    background: #ffffff;
    padding-left: 10%;
    padding-top: 10%;
    margin-left: -10%;
    margin-top: -127.5%;
    height: 670px;
    width: 189.4%;
  `;
  return (
    <ListProductContainer className="border">
      <Product />
    </ListProductContainer>
  );
}
