import React from 'react'
import Home from './Home'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <div>
        <nav><Button>
              <Link to="/">Home</Link></Button>
            <li>
              <Link to="/create">Create</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/create">
            <h1> Hello </h1>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    /*  local Storage???

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos))
}
function loadTodos() {
  const todoJSON = localStorage.getItem('todos')
  try {
    return JSON.parse(todoJSON)
} catch (error) {
  //wenn nichts drin steht kommt trotzdem undefined
}
} */
  )
}
