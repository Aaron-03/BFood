import React from 'react';
import { Card } from 'react-bootstrap';

export default function SucursalCard() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Sucursal</Card.Title>
        <Card.Text>7:00 A.M - 21.00 P.M</Card.Text>
        <Card.Text>Lun - Sab</Card.Text>
      </Card.Body>
    </Card>
  );
}
