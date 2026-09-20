const shiftCharacter = (char, shift) => {
  const code = char.charCodeAt(0);
  if (char >= "a" && char <= "z") {
    return String.fromCharCode(((code - 97 + shift) % 26) + 97);
  }
  if (char >= "A" && char <= "Z") {
    return String.fromCharCode(((code - 65 + shift) % 26) + 65);
  }
  return char;
};
const caesarCipher = (string, shift) => {
  return string
    .split("")
    .map((char) => shiftCharacter(char, shift))
    .join("");
};
export default caesarCipher;
