import React from 'react';
import Product from './Product';
import styled from '@emotion/styled';

export default function ListProducts() {
  const ListProductContainer = styled.div`
    background: #ffffff;
    padding-left: 10%;
    padding-top: 10%;
    margin-left: 20%;
    margin-top: -40%;
    height: 670px;
  `;
  return (
    <ListProductContainer className="border">
      <Product />
    </ListProductContainer>
  );
}
