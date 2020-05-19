import { Form, Image } from 'react-bootstrap';
import styled from '@emotion/styled';

const ContainerLogin = styled.div`
  height: 100vh;
  background-color: var(--custom-blue);
  display: flex;
  justify-content: center;
  align-items: center;

  > div:nth-of-type(1) {
    width: 100%;
    padding: 0rem;
  }
`;

const FormLoginSeller = styled(Form)`
  position: relative;
  background-color: var(--custom-white);
  height: auto;
  margin: auto;
  padding: 0.5rem;
  border: 3px solid var(--custom-black);
  border-radius: 27px;

  #textSignUp {
    margin-top: 1.5rem;
    text-align: center;
    color: var(--custom-black);
    font-size: 10pt;
  }
  #textSignUp a {
    text-decoration: underline;
    color: var(--custom-red);
  }

  .btn_null_pointer {
    cursor: not-allowed;

    &:hover {
      opacity: 0.8;
    }
  }
`;

const LabelsForms = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;

  label {
    margin-top: 0.5rem;
    margin-bottom: 0.2rem;
    font-weight: bold;
    letter-spacing: 0.12rem;
    font-size: 14pt;
  }
`;

const TitleLogo = styled.h4`
  padding: 0.5rem;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 16pt;
  letter-spacing: 0.28rem;
  font-weight: bold;
  color: var(--custom-red);
`;

const ImageLogo = styled.div`
  position: absolute;
  top: -3.6rem;
  display: inline-block;
  border-radius: 25rem;
  background-color: var(--custom-white);
  width: 7.5rem;
  height: 7.5rem;
  padding: 1rem;
  border: 3px solid var(--custom-black);
`;

const ImageLogoImg = styled(Image)`
  width: 100%;
`;

const FormControlContent = styled.div`
  position: relative;

  > input {
    font-size: 10pt;
    padding: 1.2rem;
    margin: auto;
  }

  #keyImgId {
    padding: 0.4rem;
  }
`;

const IconInput = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 0.25rem;
  z-index: 1;
  padding: 0.1rem;
  float: left;
  margin-top: 0.4rem;

  @media (max-width: 600px) {
    position: absolute;
    left: 1.5rem;
    top: 0px;
  }
`;

const BtnLogin = styled.button`
  display: inline-block;
  width: 9.5rem;
  height: 2.5rem;
  border-radius: 12px;
  font-weight: bold;
  text-align: center;
  color: var(--custom-white);
  background-color: var(--custom-blue);
  border: 3px solid var(--custom-black);
  transition: 0.4s all;

  &:hover {
    opacity: 0.8;
  }
`;

export {
  ContainerLogin,
  FormLoginSeller,
  LabelsForms,
  TitleLogo,
  ImageLogo,
  ImageLogoImg,
  FormControlContent,
  IconInput,
  BtnLogin,
};
