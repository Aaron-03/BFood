import React from 'react';
import styled from '@emotion/styled';
import DropdownItem from 'react-bootstrap/DropdownItem';
import { ImageSvg } from '../ui/Images';
import EditarIcon from '../../assets/img/Form/card.svg';
const Dropdown = styled.a`
  position: absolute;
  top: 58px;
  width: 300px;
  transform: translate(-45%);
  background-color: white;
  border: 2px solid;
  border-radius: 10px;
  padding: 1rem;
  overflow: hidden;
`;
const DropdownMenu = () => {
  return (
    <Dropdown>
      {/* <DropdownItem>Hola amiguito</DropdownItem>
      <DropdownItem leftIcon={<ImageSvg src={EditarIcon} />}></DropdownItem> */}
      <p>Hola mundo</p>
    </Dropdown>
  );
};

export default DropdownMenu;
