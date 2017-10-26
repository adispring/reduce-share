

filter :: Filterable f => (a -> Boolean) -> f a -> f a
filter :: (a -> Boolean) -> [a] -> [a]

const filter = (pred, xs) =>
  xs.reduce((acc, item) => pred(item) ? acc.append(item) : acc)

// filter
var filterR = (pred, list) =>
  R.isEmpty(list) ? list : pred(R.head(list)) ? R.prepend(R.head(list), filterR(pred, R.tail(list))) : filterR(pred, R.tail(list));

var filterR2 = (pred, list) => R.cond([
  [R.isEmpty, R.identity],
  [R.compose(pred, R.head), R.converge(R.prepend, [R.head, xs => filterR2(pred, R.tail(xs))])],
  [R.T, xs => filterR2(pred, R.tail(xs))],
])(list);

var filterR3 = (pred, list) => R.unless(
  R.isEmpty,
  R.converge(R.concat, [R.compose(R.ifElse(pred, R.of, R.always([])), R.head), xs => filterR3(pred, R.tail(xs))])
)(list);

var filterR4 = (pred, list) => R.unless(
  R.isEmpty,
  ([head, ...tail]) => [...(pred(head) ? [head] : []), ...filterR4(pred, tail)]
)(list);
expect(filterR4(a => a % 2, R.range(1, 10))).toEqual([1, 3, 5, 7, 9]);
