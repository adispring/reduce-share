const store = {
  private currentState: initialState,
  public dispatch: (action) => { currentState = reducer(currentState, action)},
  public getState: () => currentState,
}
