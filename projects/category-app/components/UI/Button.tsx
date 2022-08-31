import { FunctionComponent, ReactNode, ButtonHTMLAttributes } from 'react'
import classes from './Button.module.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant: 'btn-primary' | 'btn-danger'
}

const Button: FunctionComponent<ButtonProps> = ({ children, type, variant })  => {
  return <button className={`${classes['btn']} ${classes[variant]}`} type={type}>{children}</button>
}

export default Button
