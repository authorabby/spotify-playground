// import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import Dropdown from './Dropdown';

function App() {

  const items = [
    {
      value: 0, 
      label: "Other"
    }
  ]
  return (
    <div className="App">
        <Dropdown items={items} dropdownLabel="Fruit"/>
        <Dropdown items={items} dropdownLabel="Vegestables"/>
        <Button variant="contained">Hello World</Button>
  
    </div>
  );
}

export default App;
