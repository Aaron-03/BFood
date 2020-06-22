import React, { Fragment, useContext, useEffect } from 'react';
import styled from '@emotion/styled';
import ProductVendor from './ProductVendor';
import VendorContext from '../../../context/vendors/VendorContext';


const ContentProductsVendor = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 0.5rem;
    align-items: center;
    padding: 1rem;
    background-color: red;
    flex-wrap: wrap;
`;


const ListProductsVendors = () => {

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
                    <ProductVendor product={product} />
                ))
                }
            </ContentProductsVendor>
        </Fragment>
    );
}
 
export default ListProductsVendors;