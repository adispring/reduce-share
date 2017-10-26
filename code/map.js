map :: Functor f => (a -> b) -> f a -> f b
map :: (a -> b) -> [a] -> [b]

const map = (f, xs) => xs.reduce((acc, item) => acc.append(f(item)))
const map = (f, xs) => xs.reduce((acc, item) => compose(append(__, acc), f)(item))

// map
var mapI = (fn, list) => {
  var newList = [];
  for (let i = 0; i < list.length; i++) {
    newList[i] = fn(list[i]);
  }
  return newList;
};
expect(mapI(R.multiply(2), R.range(1, 5))).toEqual([2, 4, 6, 8]);

var mapR = (fn, list) =>
  (R.isEmpty(list) ? list : R.prepend(fn(R.head(list)), mapR(fn, R.tail(list))));

var mapR2 = (fn, list) => R.cond([
  [R.isEmpty, R.identity],
  [R.T, R.converge(R.prepend, [R.compose(fn, R.head), xs => mapR2(fn, R.tail(xs))])],
])(list);

var mapR3 = (fn, list) => R.unless(
  R.isEmpty,
  R.converge(R.prepend, [R.compose(fn, R.head), xs => mapR3(fn, R.tail(xs))])
)(list);

var mapR4 = (fn, list) => R.unless(
  R.isEmpty,
  ([head, ...tail]) => R.prepend(fn(head), mapR4(fn, tail))
)(list);

expect(mapR4(R.multiply(2), R.range(1, 5))).toEqual([2, 4, 6, 8]);

var mapR5 = (fn, xs) => R.unless(
  R.isEmpty,
  ([head, ...tail]) => [fn(head), ...mapR5(fn, tail)]
)(xs);