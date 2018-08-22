import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div className='app'>
    <header>Application</header>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
    <footer className='horizontalContainer'>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </footer>
  </div>
)

export default App