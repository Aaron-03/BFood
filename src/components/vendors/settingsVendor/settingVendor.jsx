import React, { useState } from 'react';
import SettingsVendorMenu from './SettingsVendorMenu';
import VendorProducts from './VendorProducts';
import styled from '@emotion/styled';
import SucursalVendor from '../SucursalVendor/SucursalVendor';

import ListOrdersVendor from '../../orders/vendors/ListOrdersVendor';
import AccountSeller from '../../Sellers/AccountSeller';



const ContentDashBoard = styled.div`
  display: flex;
`;



export default function SettingVendor() {

  const [ option, setOption ] = useState("productos");

  return (
    <ContentDashBoard>
      <SettingsVendorMenu setOption={setOption} />
      {
        option === 'productos'
        ? <AccountSeller />
        : option === 'pedidos'
        ? <VendorProducts />
        : option === 'sucursales'
        ? <SucursalVendor />
        : option === 'micuenta'
        ? <ListOrdersVendor />
        : null
      }
      
    </ContentDashBoard>
  );
}
