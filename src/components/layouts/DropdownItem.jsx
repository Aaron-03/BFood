import React from 'react';
import styled from '@emotion/styled';
const MenuItem = styled.div``;
const IconButton = styled.span``;
const DropdownItem = (props) => {
  return (
    <MenuItem>
      <IconButton>{props.leftIcon}</IconButton>
      {props.children}
    </MenuItem>
  );
};

export default DropdownItem;
