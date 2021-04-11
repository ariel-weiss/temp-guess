import * as gameTypes from './gameTypes';

const initState = {
    guesses: [],
    answers: [],
};
export const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case gameTypes.INIT_ANSWERS:
            return { answers: action.payload , guesses: []};
        case gameTypes.ADD_GUESS:
            let new_guesses = state.guesses;
            new_guesses.push(action.payload);
            return { ...state, guesses: new_guesses };
        default:
            return { ...state };
    }
};