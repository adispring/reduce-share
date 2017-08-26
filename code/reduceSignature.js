reduce :: ((a, b) -> a) -> a -> [b] -> a
reduce :: (reducer, initialValue list) -> result

reducer :: (a, b) -> a
initialValue :: a
list :: [b]
result :: a

reduce(sum, 1, [2, 3, 4]);
