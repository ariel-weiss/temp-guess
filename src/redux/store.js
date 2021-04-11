import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { gameReducer } from './game/gameReducers';
import { cityReducer } from './city/cityReducers';


// Reducer
const rootReducer = combineReducers({
    game: gameReducer,
    city: cityReducer,
}); 
// Store
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
export default store;