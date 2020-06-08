import React from 'react';
import { Container } from 'react-bootstrap';
import SucursalCard from './SucursalCard';

export default function SucursalContent() {
  return (
    <Container>
      <div id="add_button" />
      <label for="add_button">Agregar</label>
      <h1>Sucursales</h1>
      <SucursalCard />
    </Container>
  );
}
