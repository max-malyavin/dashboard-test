export function randomInteger(min, max) {
  let rand = min + Math.random() * (max - min + 1);
  return Math.floor(rand);
}
