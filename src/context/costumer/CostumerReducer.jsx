import CostumerContext from '../../types/CostumerTypes';
const { ADD_COSTUMER, LGN_COSTUMER } = CostumerContext;

export default (state, action) => {
  switch (action.type) {
    case ADD_COSTUMER:
      return {
        costumer: [...state.costumer, action.payload],
      };
    case LGN_COSTUMER:
      return {
        loginCostumer: [...state.loginCostumer, action.payload],
      };
    default:
      return state;
  }
};
