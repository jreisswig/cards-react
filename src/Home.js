import React, { useState } from 'react'

import FilterBookmark from './FilterBookmark'
import Card from './Card'
import styled from 'styled-components/macro'

export default function Home({
  cards,
  toggleBookmarked,
  filterBookmarkedCards,
}) {
  const [isOnlyBookmarksShown, setisOnlyBookmarksShown] = useState(false)
  function filterBookmarkedCards() {
    setisOnlyBookmarksShown(!isOnlyBookmarksShown)
  }
  return (
    <div>
      <FilterBookmark onClick={filterBookmarkedCards}>
        {isOnlyBookmarksShown ? 'Show all Cards' : 'Show bookmarked cards'}
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
}

const CardContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  overflow: scroll;
`
