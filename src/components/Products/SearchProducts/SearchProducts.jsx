import React, { useState } from 'react';
import Filters from './Filters';
import ListProducts from './ListProducts';
import ProductService from '../../../context/products/ProductService';

export default function SearchProducts() {
  const [criterio, setCriterio] = useState('');
  const CriterioBusqueda = (dataHijo) => {
    setCriterio(dataHijo);
  };

  return (
    <div>
      <div className="d-flex">
        <ProductService>
          <Filters parentFunction={CriterioBusqueda.bind(this)} />

          <ListProducts className="col-8" criterioBusqueda={criterio} />
        </ProductService>
      </div>
    </div>
  );
}
