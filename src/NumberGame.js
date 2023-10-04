import { useState } from "react";
import './Numbergame.css'

const NumberGame = (props) => {
    const getRandom = () => Math.floor(Math.random() * 10) + 1;
    const restart = () => {
        setTarget(getRandom())
        setGuess(0)
        setGuessCount(0)
    }
    const makeGuess = () => {
        setGuess(getRandom());
        setGuessCount(guessCount + 1)
    }
    const [guess, setGuess] = useState(getRandom);
    const [target, setTarget] = useState(getRandom());
    const [guessCount, setGuessCount] = useState(0);
    const isWinner = target === guess;
    console.log(guess)
    return (
        <div>
            <h1>Target Num: {target}</h1>
            {/* <h1 style={{ color: target === guess ? 'green' : 'red' }}>Your Guess : {guess}</h1> */}
            <h1 className={isWinner ? 'winner' : 'loser'}>Your Guess : {guess}</h1>
            <h4>Guess Number: {guessCount}</h4>
            {!isWinner &&
                <button onClick={makeGuess}>Generate Num</button>
            }
            <button onClick={restart}>New Game</button>

        </div >
    )
}

export default NumberGame;