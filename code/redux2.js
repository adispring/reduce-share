const redux = (reducer, initialState, stream) => {
  let currentState = initialState;
  let action;

  const dispatch = action => {
    currentState = reducer(currentState, action);
  };
  const getState = () => currentState;

  for(i = 0, i < stream.length, i++) {
    action = stream[i];
    dispatch(action);
  }
  return state; // the end of the world :)
}
