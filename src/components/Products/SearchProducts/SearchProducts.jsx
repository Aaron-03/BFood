import React, { useState } from 'react';
import Filters from './Filters';
import ListProducts from './ListProducts';

export default function SearchProducts() {
  const [criterio, setCriterio] = useState('');
  const CriterioBusqueda = (dataHijo) => {
    setCriterio(dataHijo);
  };
  console.log(criterio);
  return (
    <div>
      <Filters parentFunction={CriterioBusqueda.bind(this)} />

      <ListProducts criterioBusqueda={criterio} />
    </div>
  );
}
