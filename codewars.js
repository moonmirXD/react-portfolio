const leftSide = {
  w: 4,
  p: 3,
  b: 2,
  s: 1,
  t: 0,
};

const rightSide = {
  m: 4,
  q: 3,
  d: 2,
  z: 1,
  j: 0,
};

function alphabetWar(fight) {
  let rightTotal = 0;
  let leftTotal = 0;

  fight.split("").map((letter) => {
    if (leftSide.hasOwnProperty(letter)) {
      if (leftSide[letter] === "t") {
        console.log("truls");
      }
      leftTotal += leftSide[letter];
    }
    if (rightSide.hasOwnProperty(letter)) {
      rightTotal += rightSide[letter];
    }
  });

  return rightTotal > leftTotal
    ? "Right side wins!"
    : leftTotal > rightTotal
    ? "Left side wins!"
    : "Let's fight again!";
}

// left side - Left side wins!
// right side - Right side wins!
// Let's fight again!

console.log(alphabetWar("z"), "Right side wins!");
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
