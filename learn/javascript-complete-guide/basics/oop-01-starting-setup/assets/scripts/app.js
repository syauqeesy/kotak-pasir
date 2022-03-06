class Product {
  title = 'Default'
  imageUrl
  description
  price


}

const productList = {
  products: [
    new Product(),
    { 
      title: 'A Pillow',
      imageUrl: 'https://media.istockphoto.com/photos/white-pillow-isolated-on-white-background-picture-id1018424252?k=20&m=1018424252&s=612x612&w=0&h=Q2g1Ht1n-1xw0pGUM02f3lZnjFhLj1xMocg8e-oYSeo=',
      price: 19.99,
      description: 'A soft pillow'
    },
    { 
      title: 'Carpet',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-sQ9XuRYGITT2Scwweh4AGNaMMeUG_A9JpA&usqp=CAU',
      price: 90.99,
      description: 'A carpet you might like'
    }
  ],
  render () {
    const renderHook = document.getElementById('app')
    const prodList = document.createElement('ul')
    prodList.className = 'product-list'
    for (const product of this.products) {
      const prodEl = document.createElement('li')
      prodEl.className = 'product-item'
      prodEl.innerHTML = `
        <div>
          <img src="${product.imageUrl}" alt="${product.title}">
          <div class="product-item__content">
            <h2>${product.title}</h2>
            <h3>\$${product.price}</h3>
            <p>${product.description}</p>
            <button>add to cart</button>
          </div>
        </div>
      `
      prodList.append(prodEl)
    }
    renderHook.append(prodList)
  }
}

productList.render()