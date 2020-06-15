import React from 'react';
import styled from '@emotion/styled';

const SettingsButtons = styled.button`
  border-radius: 15px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  margin-bottom: 1rem;
`;

const SettingVendorMenuDiv = styled.div`
  background: rgba(85, 120, 172, 0.8);
  box-shadow: 16px 0px 16px rgba(0, 0, 0, 0.25);
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  padding-top: 3rem;
`;



export default function SettingsVendorMenu({setOption}) {

  const handleClickOption = (option) => {
    setOption(option);
  }


  return (
    <SettingVendorMenuDiv className="col-2">
      <SettingsButtons onClick={() => handleClickOption("productos")}>Mis Productos</SettingsButtons>
      <SettingsButtons onClick={() => handleClickOption("pedidos")}>Pedidos realizados</SettingsButtons>
      <SettingsButtons onClick={() => handleClickOption("sucursales")}>Sucursales</SettingsButtons>
      <SettingsButtons onClick={() => handleClickOption("micuenta")}>Mi Cuenta</SettingsButtons>
    </SettingVendorMenuDiv>
  );
}
