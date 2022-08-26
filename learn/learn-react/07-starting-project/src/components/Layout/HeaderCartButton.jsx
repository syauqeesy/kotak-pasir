import React, { useContext } from 'react'

import CartIcon from '../Cart/CartIcon'

import cartContext from '../../store/cartContext'

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
  const cartCtx = useContext(cartContext)

  const numOfCartItems = cartCtx.items.reduce((current, item) => current + item.totalAmount, 0)

  return (
    <button className={classes['button']} onClick={props.onClick}>
      <span className={classes['icon']}><CartIcon></CartIcon></span>
      <span>Your Cart</span>
      <span className={classes['badge']}>{numOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
