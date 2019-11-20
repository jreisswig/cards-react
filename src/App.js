import React, { useState } from 'react'
import cardData from './cards.json'
import FilterBookmark from './FilterBookmark'
import Card from './Card'
import styled from 'styled-components/macro'

function App() {
  const [cards, setCards] = useState(cardData)
  const [isOnlyBookmarksShown, setisOnlyBookmarksShown] = useState(false)

  return (
    <div>
      <FilterBookmark onClick={filterBookmarkedCards}>
        {isOnlyBookmarksShown ? 'Show bookmarked cards' : 'Show all Cards'}{' '}
      </FilterBookmark>
      {!isOnlyBookmarksShown ? (
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
      ) : (
        <CardContainer>
          {cards
            .filter(card => card.isBookmarked === true)
            .map((card, index) => (
              <Card
                question={card.question}
                answer={card.answer}
                key={index}
                isBookmarked={card.isBookmarked}
                toggleBookmarked={() => toggleBookmarked(index)}
              />
            ))}
        </CardContainer>
      )}
    </div>
  )

  function filterBookmarkedCards() {
    setisOnlyBookmarksShown(!isOnlyBookmarksShown)
  }

  function toggleBookmarked(index) {
    const card = cards[index]
    setCards([
      ...cards.slice(0, index),
      { ...card, isBookmarked: !card.isBookmarked },
      ...cards.slice(index + 1),
    ])
  }
}

const CardContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  overflow: scroll;
`

export default App
