let array = [4, 6, 2, 1, 9, 63, -134, 566];
let array2 = [-52, 56, 30, 29, -54, 0, -110];

const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);

console.log("array1", { "min": min(array), "max": max(array) });
console.log("array2", { "min": min(array2), "max": max(array2) });
