import logo from './logo.svg';
import './App.css';
//component import
import Home from './components/Home';
import DataProvider from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <Home />
    </DataProvider>
  );
}

export default App;
