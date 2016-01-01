import React, { Component } from 'react';
import ServerComponent from './ServerComponent';
import ClientComponent from './ClientComponent';

class App extends Component
{
  render()
  {
    return (
      <div>
        <h2>Server Component</h2>
        <ServerComponent></ServerComponent>

        <h2>Client Component</h2>
        <ClientComponent></ClientComponent>
      </div>
    );
  }
}

export default App;