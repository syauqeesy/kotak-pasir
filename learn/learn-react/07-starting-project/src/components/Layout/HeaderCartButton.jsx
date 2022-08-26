import React, { useContext, useEffect, useState } from 'react'

import CartIcon from '../Cart/CartIcon'

import cartContext from '../../store/cartContext'

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {
  const [buttonIsHighlighted, setButtonIsHighligted] = useState(false)

  const cartCtx = useContext(cartContext)
  const { items } = cartCtx

  const numOfCartItems = cartCtx.items.reduce((current, item) => current + item.amount, 0)

  const btnClasses = `${classes['button']} ${buttonIsHighlighted ? classes['bump'] : ''}`

  useEffect(() => {
    if(items.length === 0) {
      return
    }

    setButtonIsHighligted(true)

    const timerIdentifier = setTimeout(() => {
      setButtonIsHighligted(false)
    }, 300)

    return () => {
      clearTimeout(timerIdentifier)
    }
  }, [items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes['icon']}><CartIcon></CartIcon></span>
      <span>Your Cart</span>
      <span className={classes['badge']}>{numOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
