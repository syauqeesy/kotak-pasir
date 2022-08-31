import { FunctionComponent } from 'react'

import classes from './CategoryListItem.module.css'

interface CategoryListItemProps {
  name: string
  key: number
}

const CategoryListItem: FunctionComponent<CategoryListItemProps> = ({ key, name }) => {
  return (
    <li key={key} className={classes['category-item']}>
      <h2>{name}</h2>
    </li>
  )
}

export default CategoryListItem
