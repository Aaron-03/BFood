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
