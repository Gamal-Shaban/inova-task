import initialStates from '../storeInitialState';

export default (state = initialStates.details, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
