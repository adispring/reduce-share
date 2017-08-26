redux :: ((state, action) -> state) -> initialState -> [action] -> state
redux :: (reducer, initialState, stream) -> result

reducer :: (state, action) -> state
initialState :: state
list :: [action]
result :: state
