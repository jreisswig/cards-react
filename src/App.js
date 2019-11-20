import React, { useState } from 'react'
import cardData from './cards.json'

import Card from './Card'
import styled from 'styled-components/macro'

const CardContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  overflow: scroll;
`

function App() {
  const [cards, setCards] = useState(cardData)

  return (
    <div>
      <CardContainer>
        {cards.map((card, index) => (
          <Card
            question={card.question}
            answer={card.answer}
            key={index}
            isBookmarked={card.isBookmarked}
            toggleBookmarked={() => toggleBookmarked(index)}
          />
        ))}
      </CardContainer>
    </div>
  )

  function toggleBookmarked(index) {
    const card = cards[index]
    setCards([
      ...cards.slice(0, index),
      { ...card, isBookmarked: !card.isBookmarked },
      ...cards.slice(index + 1),
    ])
  }
}

export default App
