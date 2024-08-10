function palindrome(str) {
  const result = str.replace(/[\W_]/g, "").toLowerCase();
  return result.split("").reverse().join("") === result;
}

console.log(palindrome("eye"));
console.log(palindrome("_eye"));
console.log(palindrome("tes"));
console.log(palindrome("A man, a plan, a canal. Panama"));
console.log(palindrome("1 eye for of 1 eye."));
