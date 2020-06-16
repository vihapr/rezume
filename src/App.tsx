import React, {useState, useEffect} from 'react';
import useScroll from './hooks/useScroll';
// import logo from './logo.svg';
import './App.css';

function App() {
  const {scrollY} = useScroll();

  const [shrink, setShrink] = useState('');

   (function() {
    setTimeout(()=>{
      if (scrollY >= 100) setShrink('shrink')
      else setShrink('');
    }, 250)
  })()
  
  return (
    <div className="App">
      <header className={`App-header ${shrink}`}>
        <div className="App-inner">
          <div className={`name ${shrink}`}>
            <h1>Пронин Виктор</h1>
            <p>Web-разработчик</p>
          </div>
          <nav>
            <p>+79778327368&nbsp;</p>
            <p className={`${shrink}`}>exppro1@gmail.com</p>
          </nav>
        </div>

      </header>
      <div className="App-main">
        <h1>Main Block</h1>
        <p>scrollY: {scrollY}</p>
        <p>shrink: {shrink}</p>
      </div>
    </div>
  );
}

export default App;