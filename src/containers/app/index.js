import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <div className='app'>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </div>
)

export default App

/*
<header>My-Nutri-Kit</header>
<footer className='horizontalContainer'>
<Link to="/">Home</Link>
<span> - </span>
<Link to="/about-us">About</Link>
</footer>
*/