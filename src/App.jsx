import React from 'react';
import './App.css';
import Employee from './Employee.jsx';

const employee = { name: 'PrimePlays', phone: '1268600967', address: 'Gopal street', email: 'Primeop@gmail.com' };

const App = () => {
  return (
    <div className="App">
      <Employee employee={employee} />
    </div>
  );
};

export default App;
