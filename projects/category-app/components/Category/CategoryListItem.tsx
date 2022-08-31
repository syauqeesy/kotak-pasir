import { FunctionComponent } from 'react'

import classes from './CategoryListItem.module.css'

interface CategoryListItemProps {
  name: string
}

const CategoryListItem: FunctionComponent<CategoryListItemProps> = ({ name }) => {
  return (
    <li className={classes['category']}>
      <h2>{name}</h2>
    </li>
  )
}

export default CategoryListItem
