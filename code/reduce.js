const reduce = (reducer, initialValue, list) => {
  let acc = initialValue;
  let val;
  for(i = 0, i < list.length, i++) {
    val = list[i];
    acc = reducer(acc, val);
  }
  return acc;
};
