//question:1(taking current and voltage and returns power)
function circuitPower(voltage, current) {
  return voltage * current;
}

let power = circuitPower(110, 3);
console.log(power);

//question:2(returns the max number of the array.returns null if array is empty)
function findMaxNumber(numbers) {
  if (numbers.length === 0) {
    return null;
  }

  let maxNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }

  return maxNumber;
}

console.log(findMaxNumber([1, 5, 3, 9, 2]));
console.log(findMaxNumber([]));
console.log(findMaxNumber([-10, -20, -30, -5]));

//question:3(taking two arrays and returns a new array merging them)
function mergeArray(array1, array2) {
  return array1.concat(array2);
}
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];
let mergedArray = mergeArray(num1, num2);
console.log(mergedArray);

//question:4(taking an array and returns another array showing the data types of each element of taken array)
function arrayValuesTypes(arr) {
  return arr.map(value => typeof value);
}

let typesArray = arrayValuesTypes([1, 2, 'null', []]);
console.log(typesArray);
