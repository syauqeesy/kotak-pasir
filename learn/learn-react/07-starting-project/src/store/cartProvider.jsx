import React from 'react'

import cartContext from "./cartContext"

const cartProvider = props => {
  const addItemToCartHandler = item => {}
  const removeItemFromCartHandler = id => {}

  const cartContextData = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return <cartContext.Provider value={cartContextData}>{props.children}</cartContext.Provider>
}

export default cartProvider
