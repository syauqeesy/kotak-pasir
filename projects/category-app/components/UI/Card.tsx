import { FunctionComponent, ReactNode } from 'react'

import classes from './Card.module.css'

interface CardProps {
  children: ReactNode
}

const Card: FunctionComponent<CardProps> = ({ children }) => {
  return <section className={classes['card']}>{children}</section>
}

export default Card
