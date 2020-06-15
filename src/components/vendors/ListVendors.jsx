import React, { Fragment, useContext } from 'react';
import Vendor from './Vendor';
import VendorContext from '../../context/vendors/VendorContext';
import styled from '@emotion/styled';


const ContentVendors = styled.div`
    display: flex;
    margin: 2rem 2rem 5rem;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    padding: 0.2rem;
    width: 95%;

    div {
        margin-right: 1rem;
    }
`;


const ListVendors = () => {

    const { vendors } = useContext(VendorContext);


    return (
        <Fragment>
            <h2 className="text-center p-2 mt-5">NUESTROS MEJORES VENDEDORES</h2>

            <ContentVendors>
                {
                vendors.map(vendor => (
                    <Vendor
                        key={vendor.id}
                        vendor={vendor}
                    />
                ))
                }
                
            </ContentVendors>
        </Fragment>
    );
}
 
export default ListVendors;