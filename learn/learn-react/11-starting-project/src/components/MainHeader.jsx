import { Link } from 'react-router-dom'

const MainHeader = () => {
  return (
    <header>
      <main>
        <ul>
          <li>
            <Link to='/welcome'>Welcome</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
        </ul>
      </main>
    </header>
  )
}

export default MainHeader
