import styled from '@emotion/styled';

export const BtnSendData = styled.button`
  padding: 0.5rem;
  min-width: 7rem;
  width: ${(props) => (props.customWidth ? props.customWidth : '7rem')};
  border: 3px solid var(--custom-black);
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : 'var(--custom-blue)'};
  color: var(--custom-white);
  border-radius: 12px;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`;

export const BtnClose = styled.button`
  padding: 0.2rem;
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--custom-red);
  color: var(--custom-white);
  font-size: 14pt;

  &:hover {
    opacity: 0.8;
  }
`;

export const BtnBackData = styled.button`
  padding: 0.5rem;
  min-width: 7rem;
  width: ${(props) => (props.customWidth ? props.customWidth : '7rem')};
  border: 3px solid var(--custom-black);
  background-color: ${(props) =>
    props.bgColor ? props.bgColor : 'var(--custom-red)'};
  color: var(--custom-white);
  border-radius: 12px;
  font-weight: bold;

  &:hover {
    opacity: 0.8;
  }
`;
