import * as gameTypes from './gameTypes';

const initState = {
    guesses: [],
    answers: [],
    score: 0,
};
export const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case gameTypes.INIT_ANSWERS:
            return { answers: action.payload , guesses: []};
        case gameTypes.ADD_GUESS:
            let idx = state.guesses.length;
            let new_guesses = state.guesses;
            new_guesses.push(action.payload);
            if (action.payload <= state.answers[idx] + 5 && action.payload >= state.answers[idx] - 5) {
                return { ...state, guesses: new_guesses, score: state.score + 1 };
            }
            return { ...state, guesses: new_guesses };
        default:
            return { ...state };
    }
};