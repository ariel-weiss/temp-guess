import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../../redux/city/cityActions';

import GuessBox from './GuessBox/GuessBox'
import './style.css';

const GamePage = () => {
    const n_cities = 5;
    const dispatch = useDispatch();
    const currentCityIDX = useSelector(state => state.city.current_city);
    const cities = useSelector(state => state.city.cities);
    const fetching_error = useSelector(state => state.city.error);
    const guesses = useSelector(state => state.game.guesses);
    const score = useSelector(state => state.game.score);
    
    useEffect(() => {
        dispatch(fetchCities(n_cities));
    }, [])

    return (
        <div className='game-container'>
            {guesses.length === n_cities ? 'Game Over: ' + (score < 3 ? "You WON!" : "You Lose...") :
                
            fetching_error ? "Error! " + {fetching_error} :
            !cities ? 'Loading...':
            <>
                <label>{cities[currentCityIDX]?.name}</label>
                <GuessBox />
            </>
            }
        </div>
    )
}

export default GamePage
