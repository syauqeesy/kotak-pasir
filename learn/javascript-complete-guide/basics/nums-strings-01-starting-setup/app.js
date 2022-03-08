function randomIntbetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(randomIntbetween(10, 20))

function productDescription (strings, productName, productPrice) {
  console.log(strings)
  console.log(productName)
  console.log(productPrice)
  return 'This is a product!'
}

const prodName = 'JavaScript Course'
const prodPrice = 29.99

const productOutput = productDescription`This product (${prodName}) is ${prodPrice}`
console.log(productOutput)
