filter :: Filterable f => (a -> Boolean) -> f a -> f a
filter :: (a -> Boolean) -> [a] -> [a]

filter = pred => reduce((acc, item) => pred(item) ? acc.append(item) : acc)
