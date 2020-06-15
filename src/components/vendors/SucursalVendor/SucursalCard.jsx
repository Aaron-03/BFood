import React from 'react';
import { Card } from 'react-bootstrap';
import styled from '@emotion/styled';


const CardItem = styled(Card)`
  width: 16rem;
  height: 18rem;
`;

const CoverImg = styled.img`
  width: 16rem;
  height: 11rem;
  background-color: red;
`;


export default function SucursalCard() {

  return (
    <CardItem>
        <CoverImg src="" alt="as"/>
      <Card.Body>
        <Card.Title>Sucursal</Card.Title>
        <Card.Text>7:00 A.M - 21.00 P.M</Card.Text>
        <Card.Text>Lun - Sab</Card.Text>
      </Card.Body>
    </CardItem>
  );
}
