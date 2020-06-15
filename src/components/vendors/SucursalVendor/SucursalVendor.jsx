import React from 'react';
import SettingsVendorMenu from '../settingsVendor/SettingsVendorMenu';
import SucursalContent from './SucursalContent';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import SucursalCard from './SucursalCard';

import addImg from '../../../assets/img/General/add.svg';
import styled from '@emotion/styled';


const BtnAddSucursal = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  outline: none;
  outline-color: transparent;
  background-color: transparent;
  margin-left: 5rem;
  float: right;
`;



export default function SucursalVendor() {

  return (
    <Container>
      {/* <div id="add_button" /> */}

      <div className="d-flex justify-content-center my-5">
        <h2>Mis Sucursales</h2>

        <BtnAddSucursal>
          <img src={addImg} alt=""/>
        </BtnAddSucursal>
      </div>
      <SucursalCard />
    </Container>
  );
}
