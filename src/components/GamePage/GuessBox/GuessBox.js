import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addGuess } from '../../../redux/game/gameActions';
import { nextCity } from '../../../redux/city/cityActions';

const GuessBox = () => {
    const dispatch = useDispatch();
    const [guess, setGuess] = useState(0);
    
    const handleGuess = (e) => {
        e.preventDefault();
        dispatch(addGuess(guess));
        dispatch(nextCity());
        setGuess(0);
    }
    return (
        <div>
            <form>
                <input type='text' value={guess} onChange={(e)=>setGuess(e.target.value)}/>
                <button type='submit' onClick={handleGuess}>Guess</button>
            </form>
        </div>
    )
}

export default GuessBox
