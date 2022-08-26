import React, { useReducer } from 'react'

import cartContext from "./cartContext"

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD_ITEM') {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id)
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
    const existingCartItem = state.items[existingCartItemIndex]
    let updatedItems

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }

      updatedItems = [...state.items]
      updatedItems[existingCartItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  return defaultCartState
}

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

  const addItemToCartHandler = item => {
    dispatchCartAction({ type: 'ADD_ITEM', item })
  }
  const removeItemFromCartHandler = id => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id })
  }

  const cartContextData = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler
  }

  return <cartContext.Provider value={cartContextData}>{props.children}</cartContext.Provider>
}

export default CartProvider
