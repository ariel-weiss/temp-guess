import * as gameTypes from './gameTypes';

export const initAnswers = (ans) => {
    return {
        type: gameTypes.INIT_ANSWERS,
        payload: ans
    }
}

export const addGuess = (guess) => {
    return {
        type: gameTypes.ADD_GUESS,
        payload: guess
    }
}
