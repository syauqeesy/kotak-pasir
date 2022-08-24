import React from 'react'

import Expense from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense'

const App = () => {
  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div className="app">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense />
    </div>
  )
}

export default App
