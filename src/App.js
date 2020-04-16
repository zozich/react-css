import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';

function App() {
  console.log('Styles', styles);
  console.log('Styles', styles.App);

  return (
    <div className={styles.App}>
      <header className={styles['App-header']}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
