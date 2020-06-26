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

const AccountSeller = () => {
  const { vendor, loading } = useContext(VendorContext);
  const [error, setError] = useState(false);

  /* const [ FieldCompany ] = useFieldAccountVendor("Empresa"); */
  const [company, setCompany] = useState({
    title: 'Empresa',
    value: vendor.company,
    active: false,
    placeholder: 'Nombre de su empresa',
  });

  const [ruc, setRuc] = useState({
    title: 'Ruc',
    value: vendor.ruc,
    active: false,
    placeholder: 'Ruc de empresa',
  });

  const [email, setEmail] = useState({
    title: 'Email de la Empresa',
    value: vendor.email,
    active: false,
    placeholder: 'Email de empresa',
  });

  const [phone, setPhone] = useState({
    title: 'Teléfono',
    value: vendor.phone,
    active: false,
    placeholder: 'Teléfono de empresa',
  });

  const [address, setAddress] = useState({
    title: 'Dirección',
    value: vendor.address,
    active: false,
    placeholder: 'Dirección de empresa',
  });

  const [password, setPassword] = useState({
    title: 'Contraseña',
    password1: '',
    password2: '',
    active: false,
    placeholder1: 'Ingrese su contraseña',
    placeholder2: 'Ingrese su nueva contraseña',
  });

  const handleSubmitUpdateSeller = (e) => {
    e.preventDefault();

    if (
      vendor.company.trim() === '' ||
      vendor.ruc.trim() === '' ||
      vendor.email.trim().lenght < 6 ||
      vendor.phone.trim().lenght < 4 ||
      vendor.address.trim().lenght < 6
    ) {
      setError(true);
      return;
    }

    setError(false);

    vendor.passwords = {
      password1: password.password1,
      password2: password.password2,
    };

    console.log(vendor);
  };

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

              <FieldAccountVendor field={phone} setField={setPhone} />

              <FieldAccountVendor field={address} setField={setAddress} />

              <FieldPasswordVendor field={password} setField={setPassword} />
            </ContentFields>
          </div>

          <button className="btn btn-primary btn-block col-4 mx-auto mt-5">
            Actualizar mis datos
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountSeller;
