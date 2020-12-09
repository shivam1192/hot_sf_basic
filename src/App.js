import NavbarFun from './Components/NavbarComp'
import './App.css';
import ShowQuestion from './Components/ShowQuestion';
import DataContextProvider from './Context/DataContext';


function App() {
  return (
    <div className="App">
      <DataContextProvider>
      <NavbarFun/><br/>
      <ShowQuestion/>
      </DataContextProvider>
    </div>
  );
}

export default App;
