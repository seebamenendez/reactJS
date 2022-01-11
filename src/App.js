import './App.css';
import Menu from './components/Navbar/Menu';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
//import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  //jsx
  return(
    <div className="App" onClick ={ ()=>console.log() }>
      <h1>Arauca</h1>
      <Menu />
      <ItemListContainer greeting='Bienvenidos a Arauca'/>
      <ItemDetailContainer />
    </div>
  )
}

export default App;