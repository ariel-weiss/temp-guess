import * as cityTypes from './cityTypes';

const initState = {
    n_cities: 0,
    current_city: 0,
    cities: [],
    error: ''
};

export const cityReducer = (state = initState, action) => {
    switch (action.type) {
        case cityTypes.FETCH_CITIES_REQUEST:
            return { ...state, n_cities: action.payload, cities: [] , error: ''};
        case cityTypes.FETCH_CITIES_SUCCESS:
            return { ...state, current_city:  0, cities: action.payload, error: '' };
        case cityTypes.FETCH_CITIES_ERROR:
            return { ...state, cities: [], error: action.payload };
        
        case cityTypes.NEXT_CITY:
            return { ...state, current_city: state.current_city + 1 };
        
        default:
            return {...state};
    }
};