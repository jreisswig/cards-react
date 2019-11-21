import React, { useState, useEffect } from 'react'
//import cardData from './cards.json'
import FilterBookmark from './FilterBookmark'
import Card from './Card'
import styled from 'styled-components/macro'
import { getCards, patchCard } from './services.js'

export default function Home() {
  // const saveData = JSON.parse(localStorage.saveData) || []
  const [cards, setCards] = useState([]) // es werden die Daten aus dem saveDate genommen.
  const [isOnlyBookmarksShown, setisOnlyBookmarksShown] = useState(false)

  // Local Storage
  // Store your data.
  // function saveStuff(cards) {
  //   saveData = cards
  //   saveData.time = new Date().getTime()
  //   localStorage.saveData = JSON.stringify(saveData)
  // }

  //drei möglichkeiten
  //useEffect(() => {
  // console.log('This is called on every change')
  //wird aufgerufen, wenn sich irgendwas ändert, state oder prop
  // })
  useEffect(() => {
    getCards().then(setCards)
    console.log('This is called once')
  }, [])

  // useEffect(() => saveStuff(cards), [cards])
  //wird aufgerufen, wenn sich einnal was ändert, einmal am anfan gun dnie wieder

  // useEffect(() => {
  //  console.log('cards have changed')
  //wird aufgerufen, wenn sich an der card was ändert
  // }, [cards])

  return (
    <div>
      <FilterBookmark onClick={filterBookmarkedCards}>
        {isOnlyBookmarksShown ? 'Show all Cards' : 'Show bookmarked cards'}{' '}
      </FilterBookmark>
      <CardContainer>
        {cards
          .filter(card => (isOnlyBookmarksShown ? card.isBookmarked : true))
          .map(({ _id, answer, question, isBookmarked }) => (
            <Card
              question={question}
              answer={answer}
              key={_id}
              isBookmarked={isBookmarked}
              toggleBookmarked={() => toggleBookmarked(_id)}
            />
          ))}
      </CardContainer>
    </div>
  )

  function filterBookmarkedCards() {
    setisOnlyBookmarksShown(!isOnlyBookmarksShown)
  }

  function toggleBookmarked(id) {
    const index = cards.findIndex(card => card._id === id)
    const card = cards[index]
    patchCard({
      id: card._id,
      isBookmarked: !card.isBookmarked,
    }).then(updatedCard => {
      setCards([
        ...cards.slice(0, index),
        updatedCard,
        ...cards.slice(index + 1),
      ])
    })
  }
}

const CardContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  overflow: scroll;
`
