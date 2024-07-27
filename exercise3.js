function reverseString(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

function isPalindrome(str) {
  const neki = str.length;
  for (let i = 0; i < neki / 2; i++) {
    if (str[i] !== str[neki - 1 - i]) {
      return false;
    }
  }
  return true;
}

function reverseWords(str) {
  let wordArr = str.split(" ");
  let revrWordArr = wordArr.reverse();
  let revrStr = revrWordArr.join(" ");
  return revrStr;
}

let str = "dog bork";
console.log(reverseString(str));
console.log(isPalindrome(str));
console.log(reverseWords(str));
