function rot13(str) {
  return [...str].map((char) => (char.charCodeAt(0) > 64 && char.charCodeAt(0) < 91 ? String.fromCharCode(char.charCodeAt(0) > 77 ? char.charCodeAt(0) - 13 : char.charCodeAt(0) + 13) : char)).join("");
}

console.log(rot13("SERR PBQR PNZC"));
console.log(rot13("FREE CODE CAMP"));
