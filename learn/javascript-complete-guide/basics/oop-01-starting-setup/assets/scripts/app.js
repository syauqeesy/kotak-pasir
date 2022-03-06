class Product {
  // title = 'Default'
  // imageUrl
  // description
  // price

  constructor (title, imageUrl, description, price) {
    this.title = title
    this.imageUrl = imageUrl
    this.description = description
    this.price = price
  }
}

class ProductItem {
  constructor (product) {
    this.product = product
  }

  render () {
    const prodEl = document.createElement('li')
      prodEl.className = 'product-item'
      prodEl.innerHTML = `
        <div>
          <img src="${this.product.imageUrl}" alt="${this.product.title}">
          <div class="product-item__content">
            <h2>${this.product.title}</h2>
            <h3>\$${this.product.price}</h3>
            <p>${this.product.description}</p>
            <button>add to cart</button>
          </div>
        </div>
      `

      return prodEl
  }
}

class ProductList {
  products = [
    new Product('A Pillow', 'https://media.istockphoto.com/photos/white-pillow-isolated-on-white-background-picture-id1018424252?k=20&m=1018424252&s=612x612&w=0&h=Q2g1Ht1n-1xw0pGUM02f3lZnjFhLj1xMocg8e-oYSeo=', 19.99, 'A soft pillow'),
    new Product('Carpet', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-sQ9XuRYGITT2Scwweh4AGNaMMeUG_A9JpA&usqp=CAU', 90.99, 'A carpet you might like')
  ]

  constructor () {}

  render () {
    const renderHook = document.getElementById('app')
    const prodList = document.createElement('ul')
    prodList.className = 'product-list'
    for (const product of this.products) {
      const productItem = new ProductItem(product)
      prodList.append(productItem.render())
    }
    renderHook.append(prodList)
  }
}

const productList = new ProductList()
productList.render()