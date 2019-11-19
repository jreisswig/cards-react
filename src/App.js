import React from 'react'
import cardData from './cards.json'
import GlobalStyles from './GlobalStyles'
import Card from './Card'
import styled from 'styled-components/macro'

const CardContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  overflow: scroll;
`

function App() {
  return (
    <div>
      <GlobalStyles />
      <CardContainer>
        {cardData.map((card, index) => (
          <Card question={card.question} answer={card.answer} key={index} />
        ))}
      </CardContainer>
    </div>
  )
}

export default App
