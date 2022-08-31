import { FunctionComponent, ReactNode } from 'react'

import Card from '../UI/Card'

interface CategoryListProps {
  children: ReactNode
}

const CategoryList: FunctionComponent<CategoryListProps> = ({ children }) => {
  return (
    <Card>
      <ul>
        {children}
      </ul>
    </Card>
  )
}

export default CategoryList
