// Remove Duplicates From an Array.

const removeDuplicates = (arr) => {
  return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 3, 4, 5])); 
 // Output: [ 1, 2, 3, 4, 5 ]
 
console.log(removeDuplicates(['a', 'b', 'c', 'd', 'e']));
 // Output: [ 'a', 'b', 'c', 'd', 'e' ]
