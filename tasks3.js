function findDivisibleBy5(arr) {
    const index = arr.findIndex(num => num % 5 === 0);
}

console.log(findDivisibleBy5([3, 6, 10, 12]));

////////////////////////////////////////////////////////////

function filterNegatives(nestedArr) {
    return nestedArr.flat().filter(num => num >= 0);
}

console.log(filterNegatives([[1, -2], [3, -4], [5]]));

///////////////////////////////////////////////////////////

function areRemainingElementsArrays(arr) {
    const filteredArrays = arr.filter(item => Array.isArray(item));
    return filteredArrays.every(item => Array.isArray(item));
}

console.log(areRemainingElementsArrays([1, [2, 3], "hello", [4]]));

///////////////////////////////////////////////////////////

function sumOfFlattenedArray(nestedArr) {
    return nestedArr.flat().reduce((sum, num) => sum + num, 0);
}

console.log(sumOfFlattenedArray([[2, 4], [6, 8]]));

///////////////////////////////////////////////////////////

function sumOfSquares(nestedArr) {
    return nestedArr.flat().reduce((sum, num) => sum + num * num, 0);
}

console.log(sumOfSquares([[2, 4], [6, 8]]));