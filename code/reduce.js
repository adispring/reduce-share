/* eslint no-redeclare: 0 */
const R = require('require');

const reduce = (reducer, initialValue, list) => {
  let acc = initialValue;
  let val;
  for (let i = 0; i < list.length; i++) {
    val = list[i];
    acc = reducer(acc, val);
  }
  return acc;
};

// reduce

const reduce = (fn, acc, list) =>
  (R.isEmpty(list) ? acc : reduce(fn, fn(acc, R.head(list)), R.tail(list)));

var reduceR2 = (fn, acc, list) => R.cond([
  [R.isEmpty, () => acc],
  [R.T, xs => reduceR2(fn, fn(acc, R.head(xs)), R.tail(xs))],
])(list);

var reduceR3 = (fn, acc, list) => R.ifElse(
  R.isEmpty,
  () => acc,
  xs => reduceR3(fn, fn(acc, R.head(xs)), R.tail(xs))
)(list);
