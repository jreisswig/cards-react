import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Button from './Button'
import Bookmark from './Bookmark'

const CardWrapper = styled.section`
  position: relative;
  background-color: #f8eeea;
  border-radius: 2px;
  padding: 20px;
  margin-top: 20px;
  box-shadow: 0 5px 5px #f0efef;
`
const Cardtext = styled.p`
  font-weight: ${props => props.fontWeight};
`
const Answer = styled.p`
  animation: fadeIn;
  animation-duration: 3000ms;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export default function Card({
  question,
  answer,
  isBookmarked,
  toggleBookmarked,
}) {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <CardWrapper>
      <Bookmark
        onClick={toggleBookmarked}
        color={isBookmarked ? 'black' : 'lightgrey'}
      ></Bookmark>
      <Cardtext fontWeight="bold">{question}</Cardtext>
      {!isHidden && <Answer>{answer}</Answer>}

      <Button onClick={toggleIsHidden}>
        {' '}
        {isHidden ? 'Show answer' : 'Hide answer'}
      </Button>
    </CardWrapper>
  )

  function toggleIsHidden() {
    setIsHidden(!isHidden)
  }
}
