// code your solution here
razzle();

function razzle() {
    console.log("You've been razzled!");
}

function razzle2(lawyer = "Lavee", target = "em") {
    console.log(`${lawyer} razzle-dazzles ${target}`);
}

razzle2();
razzle2("Sherlock", "Watson");

function demoChain(name) {
    const part1 = "hi";
    return function () {
      const part2 = "there";
      return function () {
        console.log(`${part1.toUpperCase()} ${part2} ${name}`);
      };
    };
  }

function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(flair = "*") {
    return function (adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

//calling or invoking wrapAdjective function
wrapAdjective("~")("worth it");

