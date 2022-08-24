import React from 'react'

import Expense from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  return (
    <div className="app">
      <NewExpense />
      <Expense />
    </div>
  )
}

export default App
