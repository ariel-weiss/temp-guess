import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
const ScoreBar = () => {

    const guesses = useSelector(state => state.game.guesses);
    const answers = useSelector(state => state.game.answers);
    
    return (
        <div>
            
            <div>
                {
                    guesses &&
                    guesses.map((guess, idx) => (
                        <div key={idx}>{ 
                            (guess <= answers[idx] + 5 && guess >= answers[idx] - 5) ?
                                <div>Good {guess} / {answers[idx]}</div>
                                :
                                <div>Wrong {guess} / {answers[idx]}</div>
                        }</div>
                    )
                    )}
            </div>
                
            
        </div>
    )
}

export default ScoreBar
