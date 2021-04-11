import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addGuess } from '../../../redux/game/gameActions';
import { nextCity } from '../../../redux/city/cityActions';

const GuessBox = () => {
    const dispatch = useDispatch();
    const [guess, setGuess] = useState('');
    
    const handleGuess = (e) => {
        e.preventDefault();
        dispatch(addGuess(guess));
        dispatch(nextCity());
        setGuess('');
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
