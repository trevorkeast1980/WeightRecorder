import logo from './logo.svg';
import './App.css';
import { WeightTable } from './components/WeightTable';

function App() {
  return (
    <div className="App">
      <header className="App-header">Weight Chart</header>
      <div>
        <WeightTable/>
      </div>
    </div>
  );
}

export default App;
