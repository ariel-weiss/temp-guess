import { Provider } from 'react-redux';

import './App.css';
import store from './redux/store';
import GamePage from './components/GamePage/GamePage';
import ScoreBar from './components/ScoreBar/ScoreBar';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <GamePage />
        <ScoreBar />
      </div>
    </Provider>
  );
}

export default App;
