function swap(array, a, b) {
  // es6版
  ;[array[a], array[b]] = [array[b], array[a]]
  // es5版
  /* const temp = array[a];
    array[a] = array[b];
    array[b] = temp; */
}
