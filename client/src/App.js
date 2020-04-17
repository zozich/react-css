import React, { useEffect } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SimpleCard from './components/Card/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios('/emails')
      .then(console.log);
  });

  return (
    <div className='App'>
      <Header />
      <SimpleCard />
      <Button variant='outlined'>Simple button</Button>
      <TextField placeholder='Login' name='login' classes={{}} inputProps={{ className: 'text-field' }} />
      This should fail
    </div>
  );
}

export default App;
