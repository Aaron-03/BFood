import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { useState } from 'react';

const NavItem = styled.li`
  width: calc(var(--nav-size-menu-use) * 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const IconButton = styled(Link)`
  --button-size: calc(var(--nav-size-menu-use) * 0.5);
  width: var(--button-size);
  height: var(--button-size);
  background-color: white;
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: filter 300ms;
  ::hover {
    filter: brightness(1.2);
  }
  svg {
    width: 20px;
  }
`;

const NavbarIcono = (props) => {
  const [open, setOpen] = useState(false);
  return (
    <NavItem>
      <IconButton to="#" onClick={() => setOpen(!open)}>
        {props.icono}
      </IconButton>
      {open && props.children}
    </NavItem>
  );
};
export default NavbarIcono;
