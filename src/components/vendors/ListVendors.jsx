import React, { Fragment } from 'react';
import Vendor from './Vendor';



const ListVendors = () => {


    return (
        <Fragment>
            <h2 className="text-center p-2 mt-5">NUESTROS MEJORES VENDEDORES</h2>

            <div className="my-5 col-sm-12 d-flex justify-content-around align-items-center">
                <Vendor />
            </div>
        </Fragment>
    );
}
 
export default ListVendors;