import React from 'react'
import styled from 'styled-components/macro'

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

export default function Card({ question, answer }) {
  return (
    <CardWrapper>
      <Cardtext fontWeight="bold">{question}</Cardtext>
      <Cardtext>{answer}</Cardtext>
    </CardWrapper>
  )
}
