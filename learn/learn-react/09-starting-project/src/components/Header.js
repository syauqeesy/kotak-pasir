import { useSelector, useDispatch } from 'react-redux'

import { authenticationActions } from '../store'

import classes from './Header.module.css';

const Header = () => {
  const dispatch = useDispatch()

  const isAuthenticated = useSelector(state => state.authentication.isAuthenticated)

  const logoutHandler = () => {
    dispatch(authenticationActions.logout())
  }

  const navigation = (
    <nav>
      <ul>
        <li>
          <a href='/'>My Products</a>
        </li>
        <li>
          <a href='/'>My Sales</a>
        </li>
        <li>
          <button onClick={logoutHandler}>Logout</button>
        </li>
      </ul>
    </nav>
  )

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && navigation}
    </header>
  );
};

export default Header;
