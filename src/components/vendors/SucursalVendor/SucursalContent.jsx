<<<<<<< HEAD
import React from 'react';
import { Container } from 'react-bootstrap';
import SucursalCard from './SucursalCard';
import styled from '@emotion/styled';
import Adding_button from '../../../assets/img/General/adicionar.svg';

const AddSucursalButtonDiv = styled.div`
  float: right;
  display: flex;
`;
const AddSucursalButton = styled.img`
  width: 40px;
`;
const SucursalContentContainer = styled.div`
  width: 82.5vw;
  height: 100vh;

  float: right;
  margin-top: -100vh;
`;

export default function SucursalContent() {
  return (
    <SucursalContentContainer>
      <Container>
        <AddSucursalButtonDiv id="add_button">
          <AddSucursalButton src={Adding_button} alt="" />
          <label for="add_button" className="mt-2 ml-1">
            Agregar
          </label>
        </AddSucursalButtonDiv>
        <h1 className="text-center mt-3 mb-3 font-weight-bolder">Sucursales</h1>
        <SucursalCard />
      </Container>
    </SucursalContentContainer>
  );
}
=======
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
>>>>>>> 77e038f25c46bfb2bf733a2199e0f5028a92cb2c
