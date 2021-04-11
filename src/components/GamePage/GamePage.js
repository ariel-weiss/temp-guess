import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCities } from '../../redux/city/cityActions';

import GuessBox from './GuessBox/GuessBox'

const GamePage = () => {
    const n_cities = 5;
    const dispatch = useDispatch();
    const currentCityIDX = useSelector(state => state.city.current_city);
    const cities = useSelector(state => state.city.cities);
    const fetching_error = useSelector(state => state.city.error);
    const guesses = useSelector(state => state.game.guesses);
    
    useEffect(() => {
        dispatch(fetchCities(n_cities));
    }, [])

    return (
        <div>
            {guesses.length === n_cities ? 'Game Over' :
                
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
