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

class ElementAttribute {
  constructor (attrName, attrValue) {
    this.name = attrName
    this.value = attrValue
  }
}

class Component {
  constructor (renderHookId) {
    this.hookId = renderHookId
    this.render()
  }

  render () {}

  createRootElement (tag, cssClass, attributes) {
    const rootElement = document.createElement(tag)
    if (cssClass) {
      rootElement.className = cssClass
    }

    if (attributes && attributes.length > 0) {
      for (const attribute of attributes) {
        rootElement.setAttribute(attribute.name, attribute.value)
      }
    }

    document.getElementById(this.hookId).append(rootElement)
    return rootElement
  }
}

class ShoppingCart extends Component {
  items = []

  set cartItems(value) {
    this.items = value
    console.log(this.items)
    this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`
  }

  get totalAmount () {
    const sum = this.items.reduce((prevValue, curItem) => {
      return prevValue + curItem.price
    }, 0)
    return sum
  }

  constructor (renderHookId) {
    super(renderHookId)
  }

  addProduct (product) {
    const updatedItems = [...this.items]
    updatedItems.push(product)
    this.cartItems = updatedItems
  }

  render () {
    const cartEl = this.createRootElement('section', 'cart')
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order now</button>
    `
    this.totalOutput = cartEl.querySelector('h2')
  }
}

class ProductItem extends Component {
  constructor (product, renderHookId) {
    super(renderHookId)
    this.product = product
  }

  addToCart () {
    App.addProductToCart(this.product)
  }

  render () {
    const prodEl = this.createRootElement('li', 'product-item')
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

      const addCartButton = prodEl.querySelector('button')
      addCartButton.addEventListener('click', this.addToCart.bind(this))
  }
}

class ProductList extends Component {
  products = [
    new Product('A Pillow', 'https://media.istockphoto.com/photos/white-pillow-isolated-on-white-background-picture-id1018424252?k=20&m=1018424252&s=612x612&w=0&h=Q2g1Ht1n-1xw0pGUM02f3lZnjFhLj1xMocg8e-oYSeo=', 'A soft pillow', 19.99),
    new Product('Carpet', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-sQ9XuRYGITT2Scwweh4AGNaMMeUG_A9JpA&usqp=CAU', 'A carpet you might like', 90.99)
  ]

  constructor (renderHookId) {
    super(renderHookId)
  }

  render () {
    const prodList = this.createRootElement('ul', 'product-list', [new ElementAttribute('id', 'prod-list')])
    prodList.id = 'prod-list'
    prodList.className = 'product-list'
    for (const product of this.products) {
      new ProductItem(product, 'prod-list')
    }
  }
}

class Shop {
  constructor () {
    this.render()
  }

  render () {
    this.cart = new ShoppingCart('app')
    new ProductList('app')
  }
}

class App {
  static cart
  
  static init () {
    const shop = new Shop()
    this.cart = shop.cart
  }

  static addProductToCart(product) {
    this.cart.addProduct(product)
  }
}

App.init()
