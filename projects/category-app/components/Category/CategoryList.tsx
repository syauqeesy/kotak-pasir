import { FunctionComponent, ReactNode } from 'react'

interface CategoryListProps {
  children: ReactNode
}

const CategoryList: FunctionComponent<CategoryListProps> = ({ children }) => {
  return (
    <ul>
      {children}
    </ul>
  )
}

export default CategoryList
