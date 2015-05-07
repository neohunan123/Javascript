exports.arraysSimilar = function (arr1, arr2) {
  if (arr1 === null || arr2 === null || arr1 === undefined || arr2 === undefined) {
    return false;
  }
  
  if (arr1.length === arr2.length) {
    var arrayIndex = [];
    for (var i = 0; i < arr1.length; i++) {
      for (var j = 0; j < arr2.length; j++) {
        if (typeof (arr1[i]) === typeof (arr2[j])
          && Object.prototype.toString.apply(arr1[i]) === Object.prototype.toString.apply(arr2[j])) {
          arrayIndex[i] = j;
          break;
        }
      }
    }
    if (arrayIndex.length <= 1) {
      if (arrayIndex[0] !== undefined)
        return true;
      else
        return false;
    }
    for (var a = 0; a < arrayIndex.length; a++) {

      for (var b = a + 1; b < arrayIndex.length; b++) {
        console.log("a is " + a + " value is: " + arrayIndex[a]);
        console.log("b is " + b + " value is: " + arrayIndex[b]);
        if (arrayIndex[a] === undefined
          || arrayIndex[b] === undefined
          || arrayIndex[a] === arrayIndex[b]) {

          return false;
        }
      }
    }
    return true;
  }
  return false;
};
