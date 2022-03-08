function randomIntbetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(randomIntbetween(10, 20))
