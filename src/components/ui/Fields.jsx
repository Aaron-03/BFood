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
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-width: 15rem;
    width: ${ props => props.customWidth ? props.customWidth : '100%' };
    height: ${ props => props.customHeight ? props.customHeight : '2.5rem' };
    border-bottom: 1px solid rgba(0, 0, 0, 0.6);
`;

export {
    InputText,
    InputFile,
    ContentInputText
}