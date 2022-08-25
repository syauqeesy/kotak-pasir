import React from 'react';

import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList'


function App() {
  return (
    <div>
      <AddUser />
      <UsersList users={[]} />
    </div>
  );
}

export default App;
