import React, { Fragment } from 'react';
import styled from '@emotion/styled';

import { BtnSendData } from '../ui/Buttons';
import { Link } from 'react-router-dom';



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



const HeaderVendor = () => {


    const handleClickRedirect = (option) => {
    
    }
  
  
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
  
            <div className="d-flex col-4">
              <BtnSendData
                onClick={() => handleClickRedirect('login')}
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
          </nav>
        </ContentHeader>
      </Fragment>
    );
}
 
export default HeaderVendor;