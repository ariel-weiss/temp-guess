import * as cityTypes from './cityTypes';
import * as gameTypes from '../game/gameTypes';

const mockCities = ['London', 'Paris', 'Jerusalem', 'Haifa', 'Barcelona'];
const apiRequest = (city) => (`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9cff733aee57cb05b63dd4f731c46bc4`);

const KtoC = (temp) => (temp- 273.15);

export const fetchCities = (n_cities) => (dispatch) => {
    dispatch({ type: cityTypes.FETCH_CITIES_REQUEST, payload: n_cities });
    let cities = [];
    let temperatures = [];
    let promises = [];
    for (let i = 0; i < n_cities; i++) {
        promises.push(
            fetch(apiRequest(mockCities[i]))
            .then(res => res.json())
            .then(json => {
                cities.push({
                    id: i,
                    name: mockCities[i],
                    temp: KtoC(json?.main?.temp),
                });
                temperatures.push(KtoC(json?.main?.temp));
            })
            .catch(err => {
                dispatch({ type: cityTypes.FETCH_CITIES_ERROR, payload: err });
                return;
            })
        )
    }
    Promise.all(promises).then(() => {
        dispatch({ type: cityTypes.FETCH_CITIES_SUCCESS, payload: cities });
        dispatch({ type: gameTypes.INIT_ANSWERS, payload: temperatures });
    }).catch(err => {
        dispatch({ type: cityTypes.FETCH_CITIES_ERROR, payload: err });
    })
}

export const nextCity = () => {
    return {
        type: cityTypes.NEXT_CITY,
    }
}