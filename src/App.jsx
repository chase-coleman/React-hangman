import React,{ useEffect, useInsertionEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import myWords from './words.json'
import { PuzzleWord, UserGuess } from './components/Hangman'

// components that display the puzzle word
// unguessed letters should display an underline 
// if user guess has already been guessed -> display an alert()
// if ul component has 6 previous guess -> display an alert()

function App() {
  const [words, setWords] = useState(myWords)
  const [guess, setGuess] = useState('')
  const [prevGuesses, addGuess] = useState([])

  const resetValue = () => {
    addGuess((prevGuesses) => [...prevGuesses, guess]);
    setGuess('')
  }
 
  

  return (
    <>
      <div>
        <h1>puzzleWord</h1>
        <PuzzleWord/>
        {/* <button onClick={() => setWords(myWords)}>Words</button> */}
        <ul>{prevGuesses.map((guess) => (
          <li>{guess}</li>
        ))}</ul>
        <UserGuess props={prevGuesses}/>
        <form onSubmit={(event) => [event.preventDefault()]}>
                      <input type="text" id="userGuess" 
                      placeholder="Enter a letter" value={guess}
                      onChange={(event) => [event.preventDefault(), 
                                setGuess(event.target.value)]}/>
              <input type="submit" onClick={resetValue}/>
        </form>
        <ul id="guessedLetters"></ul>
      </div>
    </>
  )
}

export default App


  // const handleGuess = () => {

  // }

  // useEffect(() => {

  // })

  // useEffect(()=>{
  //   // console.log(words);
  // }, [words]);
  // useEffect(()=>{
  //   prevGuesses.push(guess)
  // })
