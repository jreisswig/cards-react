import React, { useState } from 'react'
import Home from './Home'
import Nav from './Nav'
import Create from './Create'
import cardData from './cards.json'

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

export default function App() {
  const [cards, setCards] = useState(cardData)

  function toggleBookmarked(index) {
    const card = cards[index]
    setCards([
      ...cards.slice(0, index),
      { ...card, isBookmarked: !card.isBookmarked },
      ...cards.slice(index + 1),
    ])
  }

  return (
    <Router>
      <Nav
        items={[
          { path: '/', text: 'Hello' },
          { path: '/create', text: 'Create' },
        ]}
      />
      <Switch>
        <Route exact path="/">
          <Home cards={cards} toggleBookmarked={toggleBookmarked} />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  )
}
