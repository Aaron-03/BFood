import React from 'react';
import { Container } from 'react-bootstrap';
import SucursalCard from './SucursalCard';
import styled from '@emotion/styled';

import addImg from '../../../assets/img/General/add.svg';


const BtnAddSucursal = styled.button`
  padding: 0.5rem;
  float: right;
`;


export default function SucursalContent() {
  return (
    <Container>
      {/* <div id="add_button" /> */}
      <label for="add_button">Agregar</label>

      <div className="row">
        <h4>Mis Sucursales</h4>

        <BtnAddSucursal>
          <img src={addImg} alt=""/>
        </BtnAddSucursal>
      </div>

      <h1>Sucursales</h1>
      <SucursalCard />
    </Container>
  );
}
