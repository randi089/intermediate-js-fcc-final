function telephoneCheck(str) {
  const rules = /^(1 ?)?(\d{3}|\(\d{3}\))[-\s]?(\d{3})[-\s]?(\d{4})$/;
  return rules.test(str);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("555-5555"));

// function hpindo(str) {
//   const rules = /^(\+62-|0)?(\d{3})[-\s]?(\d{4})[-\s]?(\d{4})$/;
//   return rules.test(str);
// }

// console.log(hpindo("+62-853-9705-4275"));
// console.log(hpindo("085397054275"));
