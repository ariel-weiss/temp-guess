import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import './style.css';

const ScoreBar = () => {

    const guesses = useSelector(state => state.game.guesses.map((g, id) => state.game.guesses[id]));
    const answers = useSelector(state => state.game.answers);
    
    const checkDeviation = (guess, idx) => {
        return (guess <= (answers[idx]) + 5 && guess >= (answers[idx]) - 5)
    };
    
    return (
            <div className='score-container'>
                {
                    guesses &&
                    guesses.map((guess, idx) => (
                        <div key={answers[idx]}>{ 
                                <div className={checkDeviation(guess, idx) ? 'good-guess' : 'bad-guess'}>
                                    <div> {guess} </div>
                                    <div>  Was {Number(answers[idx]).toFixed(4)}</div>
                                </div>
                        }</div>
                    )
                    )}
            </div>
                
    )
}

export default ScoreBar
