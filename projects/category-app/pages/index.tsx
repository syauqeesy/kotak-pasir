import { Fragment } from 'react'
import { NextPage } from 'next'

import Button from '../components/UI/Button'

const App: NextPage = () => {
  return (
    <Fragment>
      <h1>Category App</h1>
      <Button type='submit'>create</Button>
    </Fragment>
  )
}

export default App
