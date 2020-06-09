import React, { useState, useContext } from 'react';
import { Container, Row, FormGroup } from 'react-bootstrap';
import styled from '@emotion/styled';

import { useRegisterProduct } from '../../../hooks/useRegisterProduct';

import ProductIcon from '../../../assets/img/shipping-and-delivery.svg';
import avatarIcon from '../../../assets/img/Form/avatar.svg';
import LetterIcon from '../../../assets/img/signs.svg';
import { FormFileStyled } from './RegisterProduct.styles';

import { FormRegisterProduct } from '../../ui/Forms';
import { BFoodTitle, BFoodSubTitle, BFoodLabel } from '../../ui/Texts';
import { ContentInputText, InputText, InputFile } from '../../ui/Fields';
import { BtnSendData } from '../../ui/Buttons';
import { ImageSvg } from '../../ui/Images';

import './RegisterProduct.positions.css';
import ProductContext from '../../../context/products/ProductContext';
import VendorContext from '../../../context/vendors/VendorContext';
import Swal from 'sweetalert2';

const CustomInputFile = styled(BFoodLabel)`
  background-color: var(--custom-red);
  border: 2px solid #000000;

  font-size: 7pt;
  padding: 0.2rem;
  height: 2.5rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;

const ImageName = styled.p`
  position: absolute;
  width: 100%;
  padding: 0.2rem;
  text-align: center;
  left: 0rem;
  bottom: -1rem;
`;

function RegisterProduct(props) {

  const { addProductVendor } = useContext(VendorContext);

  const [ product, setProduct ] = useState({
    title: '',
    desc: '',
    category: 0,
    price: 0.00,
    image: null,
  });

  const { title, desc, category, price, image } = product;

  const handleChangeInputs = (e) => {

    if (e.target.name === 'image') {
      setProduct({
        ...product,
        [e.target.name]: e.target.files[0],
      });
      return;
    }

    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmitRegister = (e) => {
    e.preventDefault();

    if(title.trim() === '' ||
      desc.trim() === '' ||
      category === 0 ) {
        Swal.fire({
          title: 'Ingrese datos válidos',
          timer: 2000
        });

        return;
    }

    if(price <= 0) {
      Swal.fire({
        title: 'El precio no es válido',
        timer: 2000
      });

      return;
    }

    const xproduct = {
      nombre: title,
      precio: price,
      descripcion: desc,
      img: image.name,
      categoria: category.toString(),
      stock: 50,
      status: "A"
    }

    console.log(xproduct);
    addProductVendor(xproduct);

    props.handleClose();
  }

  const register = () => {
    alert(`Producto creado!
    Nombre del producto : ${inputs.nombreProducto}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useRegisterProduct(
    register
  );

  return (
    <div className="RegistroProduct">
      <Container className="p-0">
        <Row className="justify-content-center align-items-center p-0">
          <FormRegisterProduct
            customMaxWidth="45rem"
            className="col-sm-12 px-1 form-registro-producto"
            onSubmit={handleSubmitRegister}
          >
            <div className="col-sm-12 d-flex justify-content-between align-items-center mt-2">
              <BFoodSubTitle customSize="18pt">Registro</BFoodSubTitle>
              <BFoodTitle className="ml-3">BFood</BFoodTitle>
              <BFoodSubTitle customSize="18pt">Productos</BFoodSubTitle>
            </div>

            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-10 m-auto">
                <ImageSvg
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                  src={LetterIcon}
                />
                <InputText
                  className="col-10 text-left"
                  type="text"
                  placeholder="TITULO"
                  name="title"
                  onChange={handleChangeInputs}
                  value={title}
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-10 m-auto">
                <ImageSvg
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                  src={LetterIcon}
                />

                <InputText
                  className="col-10 text-left"
                  type="text"
                  placeholder="DESCRIPCIÓN"
                  onChange={handleChangeInputs}
                  name="desc"
                  value={desc}
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-10 m-auto">
                <ImageSvg
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                  src={ProductIcon}
                />

                <select
                  onChange={handleChangeInputs}
                  name="category"
                  value={category}
                  className="form-control col-10"
                >
                  <option value="0">Seleccione...</option>
                  <option value="1">Hamburguesas</option>
                  <option value="2">Pizzas y Pastas</option>
                  <option value="3">Bebidas Ligeras</option>
                  <option value="4">Gaseosas</option>
                </select>
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-10 m-auto">
                <ImageSvg
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                  src={ProductIcon}
                />

                <InputText
                  className="col-10 text-left"
                  type="text"
                  placeholder="PRECIO"
                  onChange={handleChangeInputs}
                  name="price"
                  value={price}
                />
              </ContentInputText>
            </FormGroup>
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-10 m-auto py-5 position-relative">
                <BFoodLabel className="col-6 mb-2" customSize="9pt">
                  IMAGEN DEL PRODUCTO (JPG O PNG)
                </BFoodLabel>
                <div className="col-6 d-flex justify-content-around align-items-center mb-1">
                  <CustomInputFile htmlFor="image" className="btn-subir">
                    SELECCIONE UN ARCHIVO
                  </CustomInputFile>

                  <InputFile
                    id="image"
                    type="file"
                    onChange={handleChangeInputs}
                    name="image"
                  />
                </div>

                <ImageName>{image ? image.name : ''}</ImageName>
              </ContentInputText>
            </FormGroup>
            <FormGroup className="text-center p-2 mt-4">
              <BtnSendData className="16rem">REGISTRAR</BtnSendData>
            </FormGroup>
          </FormRegisterProduct>
        </Row>
      </Container>
    </div>
  );
}

export default RegisterProduct;
