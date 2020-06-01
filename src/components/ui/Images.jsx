import styled from '@emotion/styled';

const ImageSvg = styled.img`
  width: ${(props) => (props.customWidth ? props.customWidth : '7rem')};
  height: ${(props) => (props.customHeight ? props.customHeight : '7rem')};
  float: left;
  opacity: ${(props) => (props.customOpacity ? props.customOpacity : '1')};
`;

const Magnifier = styled.img`
  width: 16px;
  margin-left: -30px;
`;

export { ImageSvg, Magnifier };
