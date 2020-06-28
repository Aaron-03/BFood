import React, { Fragment } from 'react';
import styled from '@emotion/styled';
import burguerImg from '../../../assets/img/Products/burguer.jpg';
import { useContext } from 'react';
import ProductContext from '../../../context/products/ProductContext';
import VendorContext from '../../../context/vendors/VendorContext';
import Swal from 'sweetalert2';


const ContentProduct = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 28rem;
    height: 8rem;
    background-color: white;
    border-radius: 1rem;
    box-shadow: 0px 0px 10px 1px dimgray;
    transition: 0.4s all;
`;

const ContentImg = styled.div`
    min-width: 10rem !important;
    max-width: 10rem !important;
    height: 8rem;

    img {
        width: 100%;
        height: 100%;
    }
`;

const ContentText = styled.div`
    width: 100%;
    padding: 0.5rem;

    h4 {
        font-size: 12pt;
    }

    p {
        font-size: 10pt;
        padding: 0.2rem;
    }

    div span {
        font-size: 12pt;
        font-weight: bold;
        color: var(--custom-red);
    }
`;

const BtnEditProduct = styled.button`
    width: 4rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    outline-color: var(--custom-red);
    background-color: var(--custom-blue);
    color: white;
    margin-left: 0.5rem;
    margin-bottom: 1.8rem;
`;

const BtnDelete = styled.button`
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 12pt;
    color: white;
    margin: 0rem;
    background-color: var(--custom-red);
    border: none;
    outline-color: transparent;
    border-radius: 2.5rem;
`;


const ProductVendor = ({product, handleShow}) => {

    const { getProductById, dltProductVendor } = useContext(VendorContext);
    
    const {
        id,
        nombre,
        precio,
        stock,
        descripcion
    } = product;

    const resumeText = (cant = 15) => {
        return descripcion.substring(0, cant) + '...';
    }

    const handleClickUpd = () => {
        handleShow("upd");
        getProductById(id);
    }

    const handleClickDlt = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if(result.value) {
            dltProductVendor(id);
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    }


    return (
        <Fragment>
            <ContentProduct className="position-relative">
                <ContentImg>
                    <img src={burguerImg} alt=""/>
                </ContentImg>

                <ContentText>
                    <h4>{nombre}</h4>
                    
                    <p>
                        {resumeText()}
                    </p>

                    <div className="d-flex justify-content-between">
                        <span>S/. 10.00</span>

                        <BtnEditProduct
                            onClick={handleClickUpd}
                            type="button"
                        >Editar</BtnEditProduct>
                    </div>
                </ContentText>

                <BtnDelete type="button" onClick={handleClickDlt}>X</BtnDelete>
            </ContentProduct>
        </Fragment>
    );
}
 
export default ProductVendor;