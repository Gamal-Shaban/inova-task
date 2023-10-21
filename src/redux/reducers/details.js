import initialStates from '../storeInitialState';

export default (state = initialStates.home, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
