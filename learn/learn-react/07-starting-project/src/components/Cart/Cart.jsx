import React, { useContext, useState, Fragment } from 'react'

import Modal from '../UI/Modal'
import CartItem from './CartItem'
import Checkout from './Checkout'

import cartContext from '../../store/cartContext'

import classes from './Cart.module.css'

const Cart = props => {
  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)

  const cartCtx = useContext(cartContext)

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0

  const cartRemoveHandler = id => {
    cartCtx.removeItem(id)
  }
  const cartItemAddHandler = item => {
    cartCtx.addItem(item, 1)
  }
  const orderHandler = () => {
    setIsCheckout(true)
  }

  const submitOrderHandler = async userData => {
    setIsSubmitting(true)
    await fetch('https://react-order-food-1c3e1-default-rtdb.asia-southeast1.firebasedatabase.app/Orders.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
      })
    })

    setIsSubmitting(false)
    setDidSubmit(true)
    cartCtx.clearCart()
  }

  const cartItems = (
    <ul className={classes['cart-items']}>
      {
        cartCtx.items.map(item =>
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        )
      }
    </ul>
  )

  const modalActions = (
    <div className={classes['actions']}>
      <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
      {hasItems && <button className={classes['button']} onClick={orderHandler}>Order</button>}
    </div>
  )

  const cartModalContent = (
    <Fragment>
      {cartItems}
      <div className={classes['total']}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout onCancel={props.onClose} onConfirm={submitOrderHandler} />}
      {!isCheckout && modalActions}
    </Fragment>
  )

  const isSubmittingModalContent = <p>Sending order data...</p>
  const didSubmitModalContent = (
    <Fragment>
      <p>Successfully sent the order!</p>
      <div className={classes['actions']}>
        <button className={classes['button']} onClick={props.onClose}>Close</button>
      </div>
    </Fragment>
  )

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting &&  isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  )
}

export default Cart
