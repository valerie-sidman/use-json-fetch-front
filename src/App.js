import React from 'react';
import Testing from '../src/components/Testing'

export default function App() {

  return (
    <div>
      <div>
        <h2>Data block</h2>
        <Testing url="http://localhost:7070/data" />
      </div>
      <div>
        <h2>Loading block</h2>
        <Testing url="http://localhost:7070/loading" />
      </div>
      <div>
        <h2>Error block</h2>
        <Testing url="http://localhost:7070/error" />
      </div>
    </div>


  );
}
