import React from 'react';
import SettingsVendorMenu from './SettingsVendorMenu';
import VendorProducts from './VendorProducts';
import styled from '@emotion/styled';


const ContentDashBoard = styled.div`
  display: flex;
`;


export default function SettingVendor() {


  return (
    <ContentDashBoard>
      <SettingsVendorMenu />
      <VendorProducts />
    </ContentDashBoard>
  );
}
