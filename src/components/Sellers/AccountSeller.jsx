import React from 'react';
import { useState } from 'react';
import FieldAccountVendor from './FieldAccountVendor';
import styled from '@emotion/styled';
import FieldPasswordVendor from './FieldPasswordVendor';
import { useContext } from 'react';
import VendorContext from '../../context/vendors/VendorContext';

const ContentFields = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    row-gap: 0rem;
`;

  return (
    <div className="w-100 p-5">
      <h2>Ajustes de la Cuenta</h2>

      <div className="mt-5">
        <form onSubmit={handleSubmitUpdateSeller}>
          <div className="col-8 m-auto">
            <div>
              <h6 className="font-weight-bold">Información de la Cuenta</h6>
              <hr />
            </div>

            <ContentFields>
              <FieldAccountVendor
                field={company}
                setField={setCompany}
                editable={false}
              />

              <FieldAccountVendor
                field={ruc}
                setField={setRuc}
                editable={false}
              />
            </ContentFields>
          </div>

          <div className="col-8 mx-auto mt-5">
            <div>
              <h6 className="font-weight-bold">Información del Usuario</h6>
              <hr />
            </div>

            <ContentFields>
              <FieldAccountVendor field={email} setField={setEmail} />

    return (
        <div className="w-100 p-5">
            <h2>Ajustes de la Cuenta</h2>
            
            <div className="mt-5">
                <form onSubmit={handleSubmitUpdateSeller}>
                    <div className="col-8 m-auto">
                        <div>
                            <h6 className="font-weight-bold">Información de la Cuenta</h6>
                            <hr/>
                        </div>
                        
                        <ContentFields>
                            <FieldAccountVendor field={company} setField={setCompany} editable={false} />

                            <FieldAccountVendor field={ruc} setField={setRuc} editable={false} />
                        </ContentFields>                 
                    </div>

                    <div className="col-8 mx-auto mt-5">
                        <div>
                            <h6 className="font-weight-bold">Información del Usuario</h6>
                            <hr/>
                        </div>
                        
                        <ContentFields>
                            <FieldAccountVendor field={email} setField={setEmail} />

                            <FieldAccountVendor field={phone} setField={setPhone} />

                            <FieldAccountVendor field={address} setField={setAddress} />

                            <FieldPasswordVendor field={password} setField={setPassword} />
                        </ContentFields>                 
                    </div>

                    <button
                        className="btn btn-primary btn-block col-4 mx-auto mt-5"
                    >Actualizar mis datos</button>
                </form>
            </div>
        </div>
  );
};

export default AccountSeller;
