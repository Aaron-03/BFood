import React, { useReducer } from 'react';
import CostumerTypes from '../../types/CostumerTypes';
import CostumerContext from './CostumerContext';
import CostumerReducer from './CostumerReducer';
const { ADD_COSTUMER } = CostumerTypes;
const CostumerService = (props) => {
  const initialState = {
    costumer: [],
  };
  const [dispatch] = useReducer(CostumerReducer, initialState);
  const addCostumer = async (costumer) => {
    try {
      dispatch({ type: ADD_COSTUMER, payload: costumer });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <CostumerContext.Provider
      value={{
        addCostumer,
      }}
    >
      {props.children}
    </CostumerContext.Provider>
  );
};
export default CostumerService;
