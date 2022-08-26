import React, { Fragment } from 'react'
import { createPortal } from 'react-dom'

import classes from './Modal.module.css'

const Backdrop = props => {
  return <div className={classes['backdrop']}></div>
}
const ModalOverlay = props => {
  return (
    <div className={classes['modal']}>
      <div className={classes['content']}>{props.children}</div>
    </div>
  )
}

const overlays = document.getElementById('overlays')

const Modal = props => {
  return (
    <Fragment>
      {createPortal(<Backdrop />, overlays)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlays)}
    </Fragment>
  )
}

export default Modal
