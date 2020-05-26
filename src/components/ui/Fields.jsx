import styled from '@emotion/styled';

const InputText = styled.input`
  padding: 0.2rem 0.4rem;
  border: none;
  text-align: center;
  outline: none;
`;

const InputFile = styled.input`
  display: none;
`;

const ContentInputText = styled.div`
  display: ${(props) => (props.customDisplay ? props.customDisplay : 'flex')};
  flex-direction: ${(props) =>
    props.customFdirection ? props.customFdirection : 'row'};
  justify-content: space-between;
  align-items: center;
  min-width: 15rem;
  width: ${(props) => (props.customWidth ? props.customWidth : '100%')};
  height: ${(props) => (props.customHeight ? props.customHeight : '2.5rem')};
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
`;
const SearchProductField = styled.input`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  padding: 5px 0;
  width: 84%;
`;
const SelectPrice = styled.select`
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 25px;
  width: 30%;
`;
const CustomCheckbox = styled.input`
  width: 23px;
  height: 23px;
`;
export {
  InputText,
  InputFile,
  ContentInputText,
  SearchProductField,
  SelectPrice,
  CustomCheckbox,
};
