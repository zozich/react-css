import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SimpleCard from './components/Card/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

function App() {
  return (
    <div className='App'>
      <Header />
      <SimpleCard />
      <Button variant='outlined'>Simple button</Button>
      <TextField placeholder='Login' name='login' classes={{}} inputProps={{className: 'text-field'}} />
    </div>
  );
}

export default App;
