const feast = (beast, dish) => beast[0] === dish[0] && beast.substr(-1) === dish.substr(-1);

console.log(feast("great blue heron", "garlic naan"));
console.log(feast("chickadee", "chocolate cake"));
console.log(feast("brown bear", "bear claw"));