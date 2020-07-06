import React, { Fragment, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Avatar from '../../assets/img/Form/avatar.svg';
import styled from '@emotion/styled';

import { BtnSendData } from '../ui/Buttons';
import { ImageSvg } from '../ui/Images';
import NavbarIcono from './NavbarIcono';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import RecoverAccount from '../authentication/Customer/RecoverAccount/RecoverAccount';
import AuthToken from '../../config/AuthToken';
import { useEffect } from 'react';
import CostumerContext from '../../context/costumer/CostumerContext';
import VendorContext from '../../context/vendors/VendorContext';

const ContentHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 2rem;
  background-color: var(--custom-blue);

  #contentImg {
    width: 7rem;
    height: 4rem;
  }

  a {
    color: white;
    letter-spacing: 0.2rem;
    text-decoration: none;
    transition: all 0.2s;

    &:hover {
      font-weight: bold;
    }
  }

  div,
  ul {
    flex-wrap: nowrap;
  }
`;

const DropdownMenu = styled.div`
  width: 150px;
  background-color: white;
`;


const Header = () => {
  const history = useHistory();

  const handleClickRedirect = (option) => {
    history.push(option);
  };

  const [ show, setShow ] = useState(false);

  const token = localStorage.getItem("token-auth-user");

  const [ userLog, setUserLog ] = useState(token);
  const handlerClose = () => setShow(false);
  const handlerShow = () => setShow(true);

  const handleClickClose = () => {
    localStorage.removeItem("token-auth-user");
    setUserLog(null);
  }

  useEffect(() => {



  }, []);


  return (
    <Fragment>
      <ContentHeader>
        <div id="contentImg">
          <img src="" alt="" />
        </div>

        <nav className="row col-8 align-items-center">
          <ul className="d-flex m-0 col-8 justify-content-around align-items-center">
            <li>
              <Link to="/">INICIO</Link>
            </li>

            <li>
              <Link to="/">SERVICIOS</Link>
            </li>

            <li>
              <Link to="/">NOSOTROS</Link>
            </li>
          </ul>

          {
          !userLog
          ? <div className="d-flex col-4">
            <BtnSendData
              onClick={() => handleClickRedirect('/customer/login')}
              bgColor="var(--custom-red)"
              className="p-1">
              LOGIN
            </BtnSendData>

            <BtnSendData
              onClick={() => handleClickRedirect('signup')}
              bgColor="var(--custom-red)"
              className="ml-2 p-1">
              SIGN UP
            </BtnSendData>
          </div>
          : <NavbarIcono
              icono={
                <ImageSvg
                  src={Avatar}
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                />
            }>
            <DropdownMenu>
              <button style={{ width: '100%' }} onClick={handlerShow}>
                Recuperar Cuenta
              </button>
              <button
                type="button"
                onClick={handleClickClose}
                style={{ width: '100%' }}>Salir</button>
            </DropdownMenu>
          </NavbarIcono>
          }

          

          {/* <NavbarIcono
            icono={
              <ImageSvg
                src={Avatar}
                customWidth="2.6rem"
                customHeight="2.6rem"
              />
          }>
            <DropdownMenu>
              <button style={{ width: '100%' }} onClick={handlerShow}>
                Recuperar Cuenta
              </button>
              <button style={{ width: '100%' }}>Salir</button>
            </DropdownMenu>
          </NavbarIcono> */}
        </nav>
      </ContentHeader>
      <Modal show={show} onHide={handlerClose}>
        <Modal.Body>
          <RecoverAccount />
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default Header;
