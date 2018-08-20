import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import './app.css'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
    <footer>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </footer>
  </div>
)

export default App