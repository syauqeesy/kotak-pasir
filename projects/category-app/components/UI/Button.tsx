import { FunctionComponent, ReactNode } from 'react'
import classes from './Button.module.css'

interface ButtonProps {
  type: 'button' | 'submit' | 'reset'
  children: ReactNode
}

const Button: FunctionComponent<ButtonProps> = ({ type, children })  => {
  return <button className={`${classes['btn']}`} type={type}>{children}</button>
}

export default Button
