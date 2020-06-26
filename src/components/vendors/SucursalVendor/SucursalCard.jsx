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

const SucursalCard = (office) => {

  console.log(office);

  const {
    id,
    name,
    timeInit,
    timeEnd,
    dayInit,
    dayEnd,
    img
  } = office;

  return (
    <CardItem>
        <CoverImg src={img} alt="as"/>
      <Card.Body>
      <Card.Title>{name}</Card.Title>
        <Card.Text>{timeInit} - {timeEnd}</Card.Text>
        <Card.Text>{dayInit} - {dayEnd}</Card.Text>
      </Card.Body>
    </CardItem>
  );
}

export default SucursalCard;
