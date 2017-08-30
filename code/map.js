map :: Functor f => (a -> b) -> f a -> f b
map :: (a -> b) -> [a] -> [b]

map = f => reduce((acc, item) => acc.append(f(item)))
map = f => reduce((acc, item) => compose(append(__, acc), f)(item))
