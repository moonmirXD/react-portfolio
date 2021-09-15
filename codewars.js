// const leftSide = {
//   w: 4,
//   p: 3,
//   b: 2,
//   s: 1,
//   t: 0,
// };

// const rightSide = {
//   m: 4,
//   q: 3,
//   d: 2,
//   z: 1,
//   j: 0,
// };

// function alphabetWar(fight) {
//   let rightTotal = 0;
//   let leftTotal = 0;

//   fight.split("").map((letter) => {
//     if (leftSide.hasOwnProperty(letter)) {
//       if (letter === "t") {
//       }
//       leftTotal += leftSide[letter];
//     }
//     if (rightSide.hasOwnProperty(letter)) {
//       rightTotal += rightSide[letter];
//     }
//   });

//   return rightTotal > leftTotal
//     ? "Right side wins!"
//     : leftTotal > rightTotal
//     ? "Left side wins!"
//     : "Let's fight again!";
// }

// left side - Left side wins!
// right side - Right side wins!
// Let's fight again!

// console.log(alphabetWar("z"), "Right side wins!");
// console.log(alphabetWar("tz"), "Left side wins!");
// console.log(alphabetWar("jz"), "Right side wins!");
// console.log(alphabetWar("zt"), "Left side wins!");
// console.log(alphabetWar("sj"), "Right side wins!");
// console.log(alphabetWar("azt"), "Left side wins!");
// console.log(alphabetWar("tzj"), "Right side wins!");
// console.log(alphabetWar("jbdt"), "Let's fight again!");
// console.log(alphabetWar("wololooooo"), "Left side wins!");
// console.log(alphabetWar("zdqmwpbs"), "Let's fight again!");
// console.log(alphabetWar("ztztztzs"), "Left side wins!");

// const countString = (str) => {
//   const result = {};
//   str
//     .replace(/\s|\W/g, "")
//     .toLowerCase()
//     .trim()
//     .split("")
//     .map((letter) => {
//       result[letter] = result[letter] + 1 || 1
//     });
//   return result;
// };

// console.log(countString("Hello"));
// console.log(countString("Hello there!"));
// console.log(countString(" Hel 12355!!l o there! "));

//  function domainName(url){
//   //your code here
//   return url.match(//gi)

// }

// console.log(domainName(["http://google.com"]), "google");
// console.log(domainName("http://google.co.jp"), "google");
// console.log(domainName("www.xakep.ru"), "xakep");
// console.log(domainName("https://youtube.com"), "youtube");

// const same = (arr1, arr2) => {
//   if(arr1.length !== arr2.length) return false;

//   for(let number of arr1){
//     const correctIndex = arr2.indexOf(number ** 2)
//     if(correctIndex === -1) return false
//     arr2.splice(correctIndex, 1)
//   }
//   return true
// }

// const same = (arr1 ,arr2) => {
//   const firstObj = {};
//   const secondObj = {};

//   if(arr1.length !== arr2.length) return false

//   for(let number of arr1) {
//     firstObj[number] = firstObj[number] + 1 || 1
//   }

//   for(let number of arr2) {
//     secondObj[number] = secondObj[number] + 1 || 1
//   }

//   for(let key in firstObj) {
//     if(key ** 2 in secondObj === false) {
//       return false;
//     }
//     if(firstObj[key] !== secondObj[key ** 2]){
//       return false
//     }
//   }
//   return true;
// }
// console.log(same([1,2,3,2], [1,9,4,4]));
// console.log(same([1,2,3], [1,9,4,2]));
// console.log(same([1,2,3], [1,9,4,2,2]));
// console.log(same([1,2,3,4], [1,9,4,16]));

// const validAnagram = (word1, word2) => {
//   if(word1.length !== word2.length) return false;
//   const lookup = {};

//   for(const letter of word1){
//     lookup[letter] = lookup[letter] + 1 || 1;
//   }

//   for(let i = 0; i < word2.length; i++){
//     let letter = word2[i];
//     if(!lookup[letter]) return false;

//     else {
//       lookup[letter] -= 1;
//     }
//   }

//   return true;
// }

// console.log(validAnagram('', ''));
// console.log(validAnagram('aaz', 'aaz'));
// console.log(validAnagram('anagram', 'nagaram'));
// console.log(validAnagram('rat', 'car'));
// console.log(validAnagram('qwerty', 'qeywrt'));
// console.log(validAnagram('texttwisttime', 'timetwisttext'))

const countUniqueValues = (num) => {
  let i = 0;
  // for(let j = 1; j < num.length; j++){
  //   if(num[i] !== num[j]){
  //     i += 1;
  //     num[i] = num[j];
  //   }
  // }
  num.forEach((number, index) => {
    if (num[i] !== num[index]) {
      i += 1;
      num[i] = num[index];
    }
  });
  return i === 0 ? 0 : i + 1;
};

countUniqueValues([1, 1, 2, 3, 5, 5, 5, 5, 6, 7]);
countUniqueValues([6, 6, 6, 6, 6, 2]);
countUniqueValues([3, 3, 3, 3, 3]);
countUniqueValues([2, 2, 2, 1]);
