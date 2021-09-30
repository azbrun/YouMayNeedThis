import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

//components
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemList/ItemList';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <ItemListContainer greeting="Bienvenido a YouMayNeedThis" />
      <hr/>
      <ItemList />
    </div>
  );
}

export default App;
