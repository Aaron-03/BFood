import React, { useState, useContext } from 'react';
import Filters from './Filters';
import ListProducts from './ListProducts';
import ProductService from '../../../context/products/ProductService';
import ProductContext from '../../../context/products/ProductContext';


export default function SearchProducts() {

  const { searchByTerm } = useContext(ProductContext);

  const [ criterio, setCriterio ] = useState('');
  const CriterioBusqueda = (dataHijo) => {
    setCriterio(dataHijo);
  };


  return (

    <div>
      <div className="d-flex">
        <ProductService>
          <Filters parentFunction={CriterioBusqueda.bind(this)} />

          <ListProducts criterioBusqueda={criterio} />
        </ProductService>
      </div>
    </div>
  );
}
