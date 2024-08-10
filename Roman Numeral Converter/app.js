function convertToRoman(num, from = "") {
  if (num === 0) return from;
  const romanBaseSymbol = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  for (const key in romanBaseSymbol) {
    if (num >= romanBaseSymbol[key]) {
      return convertToRoman(num - romanBaseSymbol[key], from + key);
    }
  }
}

// function convertToNumber(roman, from = 0) {
//   if (!roman.length) return from;
//   if (!roman.match(/[MCDXLIV]/)) return "Not Roman";
//   const romanBaseSymbol = {
//     M: 1000,
//     CM: 900,
//     D: 500,
//     CD: 400,
//     C: 100,
//     XC: 90,
//     L: 50,
//     XL: 40,
//     X: 10,
//     IX: 9,
//     V: 5,
//     IV: 4,
//     I: 1,
//   };
//   for (const key in romanBaseSymbol) {
//     if (roman[0] + roman[1] === key) {
//       return convertToNumber(roman.slice(2), from + romanBaseSymbol[key]);
//     } else if (roman[0] === key) {
//       return convertToNumber(roman.slice(1), from + romanBaseSymbol[key]);
//     }
//   }
// }

console.log(convertToRoman(36));
