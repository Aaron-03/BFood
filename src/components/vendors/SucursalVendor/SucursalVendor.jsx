import React from 'react';
import SettingsVendorMenu from '../settingsVendor/SettingsVendorMenu';
import { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import SucursalCard from './SucursalCard';

import addImg from '../../../assets/img/General/add.svg';
import styled from '@emotion/styled';
import SucursalRegister from './SucursalRegister';

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
const ModalSucursalForm = styled(Modal.Body)`
  margin-left: -35rem;
  width: 100em;
`;
const SucursalRegisterCustom = styled(SucursalRegister)`
  height: 100em;
`;
export default function SucursalVendor() {
  const [show, setShow] = useState(false);
  const handlerClose = () => setShow(false);
  const handlerShow = () => setShow(true);
  return (
    <Container>
      {/* <div id="add_button" /> */}

      <div className="d-flex justify-content-center my-5">
        <h2 className="font-weight-bolder">Mis Sucursales</h2>

        <BtnAddSucursal onClick={handlerShow}>
          <img src={addImg} alt="" />
        </BtnAddSucursal>
      </div>
      <SucursalCard />
      <Modal show={show} onHide={handlerClose}>
        <ModalSucursalForm>
          <SucursalRegisterCustom />
        </ModalSucursalForm>
      </Modal>
    </Container>
  );
}
