import initialStates from '../storeInitialState';
import {
  DETAILS_DATA,
  DETAILS_LOADING,
} from '../actions/types';

export default (state = initialStates.details, action) => {
  switch (action.type) {
    case DETAILS_LOADING:
      return {...state, loading: action?.payload?.loading};
    case DETAILS_DATA:
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return state;
  }
};
