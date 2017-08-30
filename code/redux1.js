const redux = (reducer, initialState, stream) => {
  let state = initialState;
  let action;
  for(i = 0, i < stream.length, i++) {
    action = stream[i];
    state = reducer(state, action);
  }
  return state;
}
