/**
 * converts km/h to cm/s
 * 
 * @param speed speed in km/h
 * @returns returns speed from km/h to cm/s
 */
const cockroachSpeed = speed => Number.parseInt(speed * 27.7778);

console.log(cockroachSpeed(1.08));
console.log(cockroachSpeed(1.09));