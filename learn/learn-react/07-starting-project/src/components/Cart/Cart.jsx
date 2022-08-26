import React from 'react'

import Modal from '../UI/Modal'

import classes from './Cart.module.css'

const Cart = props => {
  const cartItems = [{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(item => <ul className={classes['cart-items']}><li>{item.name}</li></ul>)

  return (
    <Modal>
      {cartItems}
      <div className={classes['total']}>
        <span>Total Amount</span>
        <span>45.22</span>
      </div>
      <div className={classes['actions']}>
        <button className={classes['button--alt']}>Close</button>
        <button className={classes['button']}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
