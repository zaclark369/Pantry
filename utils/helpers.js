// var collection = []; //object
// var final = [];
// var arrays = [];

// let uniqueFinal = final.filter((c, index) => {
//     return final.indexOf(c) === index;
// });

function getAllIndexes(arr, val) {
  var indexes = [],
    i;
  for (i = 0; i < arr.length; i++) if (arr[i] === val) indexes.push(i);
  return indexes;
}

function concatArrays(array) {
  array.forEach((item) => {
    arrays.push(item);
  });
  console.log(arrays);
}

const isArray = (element) => Array.isArray(element);

function findArray(collection) {
  for (i = 0; i < collection.length; i++) {
    if (isArray(collection[i]) && collection[i] != undefined) {
      concatArrays(collection[i]);
    }
  }
}

// var unique_categories = (category) => {
//   collection.push(category);
// //   return findArray(collection);
// return collection.pop();
// };

let arr = [];

var unique_categories = (category) => {
  let categoryString = JSON.stringify(category)
    .toLowerCase()
    .replace(/[^0-9a-z]/gi, " ");

    return categoryString;

//   if (arr.includes(categoryString)) {
//     return false;
//   } else {
//     arr.push(categoryString);
//     return true;
//   }
};

module.exports = { unique_categories };
