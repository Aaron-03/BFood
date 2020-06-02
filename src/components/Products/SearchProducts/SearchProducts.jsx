import React, { useState } from 'react';
import Filters from './Filters';
import ListProducts from './ListProducts';

export default function SearchProducts() {
  const [criterio, setCriterio] = useState('');
  const CriterioBusqueda = (dataHijo) => {
    setCriterio(dataHijo);
  };

  return (
    <div>
      <div className="d-flex">
          <Filters parentFunction={CriterioBusqueda.bind(this)} />

          <ListProducts className="col-8" criterioBusqueda={criterio} />
      </div>
    </div>
  );
}
