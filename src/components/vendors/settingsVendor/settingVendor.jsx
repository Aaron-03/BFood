import React, { useState } from 'react';
import SettingsVendorMenu from './SettingsVendorMenu';
import VendorProducts from './VendorProducts';
import styled from '@emotion/styled';
import SucursalVendor from '../SucursalVendor/SucursalVendor';

import ListOrdersVendor from '../../orders/vendors/ListOrdersVendor';
import AccountSeller from '../../Sellers/AccountSeller';
import { ContentLoading } from '../../ui/Containers';
import { useContext } from 'react';
import VendorContext from '../../../context/vendors/VendorContext';



const ContentDashBoard = styled.div`
  display: flex;
`;



export default function SettingVendor() {

  const [ option, setOption ] = useState("productos");
  const { loading } = useContext(VendorContext);
  

  return (
    <ContentDashBoard>
      {
      loading
      ? <ContentLoading />
      : null
      }
      
      <SettingsVendorMenu setOption={setOption} />
      {
        option === 'productos'
        ? <VendorProducts />
        : option === 'pedidos'
        ? <ListOrdersVendor />
        : option === 'sucursales'
        ? <SucursalVendor />
        : option === 'micuenta'
        ? <AccountSeller />
        : null
      }
      
    </ContentDashBoard>
  );
}
