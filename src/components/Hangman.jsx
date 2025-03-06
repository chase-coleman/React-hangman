import React, { useState } from 'react'
import myWords from '../words.json'

const randomNums = (min, max) => {
    return (Math.floor(Math.random() * (max-min + 1)) + min)
  }

let correctGuesses = []
let incorrectGuesses = []
export const UserGuess = ({props}) => {
    
    if (wordToGuess.includes(props.at(-1))){
        correctGuesses.push(props.at(-1))
    } else {
        incorrectGuesses.push(props.at(-1))
    }
    console.log(correctGuesses)
    console.log(incorrectGuesses)
}

const wordToGuess = myWords[randomNums(1,25)];
const mapToUnderscores = (word) => { return word.split('').map(() => '_').join(' '); };
let output = mapToUnderscores(wordToGuess)

export const PuzzleWord = React.memo(() => {
    return (
        <>
        <p>{wordToGuess}</p>
        <p>{output}</p>
        </>
    )
    }
)

