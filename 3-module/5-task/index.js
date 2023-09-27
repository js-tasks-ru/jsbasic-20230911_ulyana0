function getMinMax(str) {
  let newArr = str.split(' ').filter(key => isFinite(key)).map((key) => (+key)).sort((a, b) => a - b);
  return {
    min: newArr[0],
    max: newArr[newArr.length - 1],
  };
}
