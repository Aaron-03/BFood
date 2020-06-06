import React from 'react';
import styled from '@emotion/styled';

const SettingsButtons = styled.button`
  border-radius: 15px;
  padding: 10px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  width: 15em;
  margin-top: 2em;
  margin-left: 1.5em;
`;

const SettingVendorMenuDiv = styled.div`
  background: rgba(85, 120, 172, 0.8);
  box-shadow: 16px 0px 16px rgba(0, 0, 0, 0.25);
  height: 100vh;
  width: 18rem;
`;
export default function SettingsVendorMenu() {
  return (
    <SettingVendorMenuDiv className="setgings-vendor-menu">
      <SettingsButtons>Pedidos realizados</SettingsButtons>
      <SettingsButtons>Productos</SettingsButtons>
      <SettingsButtons>Sucursales</SettingsButtons>
    </SettingVendorMenuDiv>
  );
}
