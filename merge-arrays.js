const merge = function (arr1, arr2) {
  let mergedArray = arr1.concat(arr2);
  let sortedArray = mergedArray.sort((a, b) => a - b);
  return sortedArray;
};

console.log(merge([4, 5, 6], [1, 2, 3, 4]), "=?", [1, 2, 3, 4, 4, 5, 6]);
console.log(merge([4], [2, 5, 8]), "=?", [2, 4, 5, 8]);
console.log(merge([1, 2, 6], []), "=?", [1, 2, 6]);
