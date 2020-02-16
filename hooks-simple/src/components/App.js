import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

const App = () => {
//const [ currentValue, setCurrentValue ] = useState(initialValue);
  const [resource, setResource] = useState('posts');

  return (
    <div className="ui container">
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <UserList />
      <ResourceList resource={resource} />
    </div>
  );

}

export default App;