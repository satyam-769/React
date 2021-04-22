import React from 'react';
import ReactDOM from 'react-dom'

export default function formatName(user) {
    return (
        <div>
            <h1>{user.firstName}_{user.lastName}</h1>
        </div>
    )
}  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez'
  };
  
  const element = (
    <h1>
      Hello, {formatName(user)}!
    </h1>
  );
  
  ReactDOM.render(
    element,
    document.getElementById('root')
  );