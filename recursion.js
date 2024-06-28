/** product: calculate the product of an array of numbers. */

function product(nums, i=0) {
  if (i === nums.length) return 1;
  return nums[i] * product(nums, i+1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, i=0) {
  if (words[i].length <= longest(words, i+1));
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i=0, newStr="") {
  if (i === str.length()) return;
  if (i % 2) {
    newStr.push(str[i]);
  };
  return everyOther(str, i + 1, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, i=0) {
  let leftIndex = i;
  let rightIndex = str.length - i - 1;
  if (leftIndex === rightIndex) return true;
  if (leftIndex !== rightIndex) return false;
  return isPalindrome(str, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i=0) {
  if (i === arr.length()) return -1;
  if (arr[i] !== val) {
    findIndex(arr, val, i+1)
  } else {return i};
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i=0, strCopy="") {
  if (strCopy.length() === str.length()) return strCopy;
  strCopy.shift(str[i]);
  return revString(str, i + 1, strCopy);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {

}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
