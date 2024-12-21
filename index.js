// Function: saturdayFun
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Function: mondayWork
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Function: wrapAdjective
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

// Example Usage

// Testing saturdayFun
console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("bathe my dog")); // "This Saturday, I want to bathe my dog!"

// Testing mondayWork
console.log(mondayWork()); // "This Monday, I will go to the office."
console.log(mondayWork("work from home")); // "This Monday, I will work from home."

// Testing wrapAdjective
const wrapWithStars = wrapAdjective("*");
console.log(wrapWithStars("a hard worker")); // "You are *a hard worker*!"

const wrapWithExclamation = wrapAdjective("!!!");
console.log(wrapWithExclamation("amazing")); // "You are !!!amazing!!!"

const wrapWithPercent = wrapAdjective("%");
console.log(wrapWithPercent("a dedicated programmer")); // "You are %a dedicated programmer%!"
