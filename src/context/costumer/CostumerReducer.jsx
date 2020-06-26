import CostumerContext from '../../types/CostumerTypes';
const { ADD_COSTUMER } = CostumerContext;

export default (state, action) => {
  switch (action.type) {
    case ADD_COSTUMER:
      return {
        costumer: [...state.costumer, action.payload],
      };
    default:
      return state;
  }
};
