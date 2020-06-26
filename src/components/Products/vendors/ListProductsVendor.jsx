import React, { Fragment, useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import ProductVendor from './ProductVendor';
import VendorContext from '../../../context/vendors/VendorContext';


const ContentProductsVendor = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.2rem;
    row-gap: 3rem;
    align-items: center;
    padding: 0.5rem;
    flex-wrap: wrap;
`;


const ListProductsVendors = ({handleShow}) => {

    const {
        products,
        getProductsByVendor
    } = useContext(VendorContext);

    useEffect(() => {
        getProductsByVendor();
    }, []);

    return (
        <Fragment>
            <ContentProductsVendor>
                {
                products.map(product => (
                    <ProductVendor key={product.id} handleShow={handleShow} product={product} />
                ))
                }
            </ContentProductsVendor>
        </Fragment>
    );
}
 
export default ListProductsVendors;