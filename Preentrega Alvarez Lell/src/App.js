import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './Componentes/Navegacion/NavBar.js';
import ItemlistContainer from './Componentes/Navegacion/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
      </Router>
      <ItemlistContainer/>
    </div>
  );
}

export default App;
