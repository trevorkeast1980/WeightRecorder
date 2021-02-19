import logo from './logo.svg';
import './App.css';
import { WeightTable } from './components/WeightTable';
import { WeightChart } from './components/WeightChart';

function App() {
  return (
    <div className="App">
      <header className="App-header">Weight Table</header>
      <div>
        <WeightTable/>
        <WeightChart/>
      </div>
    </div>
  );
}

export default App;
