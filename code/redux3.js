const redux = (reducer, initialState) => {
  let currentState = initialState;

  const dispatch = action => {
    currentState = reducer(currentState, action);
  };
  const getState = () => currentState;

  return ({
    dispatch,
    getState,
  });
};

const store = redux(reducer, initialState);
const action = { type, payload };
store.dispatch(action);
store.getState();
