import { FunctionComponent, ReactNode } from 'react'
import classes from './Button.module.css'

interface ButtonProps {
  children: ReactNode
  type: 'button' | 'submit' | 'reset'
  variant: 'btn-primary'
}

const Button: FunctionComponent<ButtonProps> = ({ children, type, variant })  => {
  return <button className={`${classes['btn']} ${classes[variant]}`} type={type}>{children}</button>
}

export default Button
