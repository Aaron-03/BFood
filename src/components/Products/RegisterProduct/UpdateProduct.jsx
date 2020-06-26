import React, { useState, useContext, useEffect } from 'react';
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
import VendorContext from '../../../context/vendors/VendorContext';

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

function UpdateProduct(props) {

  const { updProductVendor, currentProduct } = useContext(VendorContext);

  const [ product, setProduct ] = useState({
    title: '',
    desc: '',
    stock: 0,
    category: 0,
    price: 0.00,
    image: null,
  });

  const { title, desc, category, price, image, stock } = product;

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

  const handleSubmitUpdate = (e) => {
    e.preventDefault();

    const xproduct = {
      id: currentProduct.id,
      nombre: title,
      precio: price,
      descripcion: desc,
      img: image.name,
      categoria: category.toString(),
      stock: 50,
      status: "A"
    }

    updProductVendor(xproduct);
  }

  const register = () => {
    alert(`Producto creado!
    Nombre del producto : ${inputs.nombreProducto}`);
  };

  const { inputs, handleInputChange, handleSubmit } = useRegisterProduct(
    register
  );


  useEffect(() => {

    if(currentProduct !== null) {
        const xproduct = {
            id: currentProduct.id,
            title: currentProduct.nombre,
            price: currentProduct.precio,
            desc: currentProduct.descripcion,
            image: {
                name: currentProduct.img
            },
            category: currentProduct.categoria,
            stock: 50,
            status: "A"
        }

        setProduct(xproduct);
        console.log("Dentro");
        console.log(currentProduct);
        return;
    }

    console.log("Fuera");
    console.log(currentProduct);

  }, [currentProduct]);


  return (
    <Container className="p-4 bg-white">
      <FormRegisterProduct
        onSubmit={handleSubmitUpdate}
      >
        <div className="col-sm-12 d-flex justify-content-between align-items-center mt-2">
          <BFoodSubTitle customSize="18pt">Registro</BFoodSubTitle>
          <BFoodTitle className="ml-3">BFood</BFoodTitle>
          <BFoodSubTitle customSize="18pt">Productos</BFoodSubTitle>
        </div>
        <Row className="justify-content-center">
          <div className="col-5">
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                  src={LetterIcon}
                />
                <InputText
                  className="col-12 text-left"
                  type="text"
                  placeholder="NOMBRE DEL PRODUCTO"
                  name="title"
                  onChange={handleChangeInputs}
                  value={title}
                />
              </ContentInputText>
            </FormGroup>

            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                  src={LetterIcon}
                />

                <InputText
                  className="col-12 text-left"
                  type="text"
                  placeholder="DESCRIPCIÓN"
                  name="desc"
                  onChange={handleChangeInputs}
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
                  <option value="0">CATEGORÍA...</option>
                  <option value="1">Hamburguesas</option>
                  <option value="2">Pizzas y Pastas</option>
                  <option value="3">Bebidas Ligeras</option>
                  <option value="4">Gaseosas</option>
                </select>
              </ContentInputText>
            </FormGroup>

            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                  src={LetterIcon}
                />
                <InputText
                  className="col-12 text-left"
                  type="text"
                  placeholder="STOCK"
                  name="stock"
                  onChange={handleChangeInputs}
                  value={stock}
                />
              </ContentInputText>
            </FormGroup>
          </div>

          <div className="col-5">
            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-12 m-auto">
                <ImageSvg
                  customWidth="2.6rem"
                  customHeight="2.6rem"
                  src={LetterIcon}
                />
                <InputText
                  className="col-12 text-left"
                  type="text"
                  placeholder="PRECIO"
                  name="price"
                  onChange={handleChangeInputs}
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

            <FormGroup className="mt-5">
              <ContentInputText className="col-sm-12 m-auto">
                <input className="col-2" type="checkbox" name="" />

                <label className="col-10">DESEA PUBLICARLO?</label>
              </ContentInputText>
            </FormGroup>

            <FormGroup className="text-center p-2 mt-4">
              <BtnSendData>REGISTRAR</BtnSendData>
            </FormGroup>
          </div>
        </Row>
      </FormRegisterProduct>
    </Container>
  );
}

export default UpdateProduct;
