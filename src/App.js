import './App.css';
import Menu from './components/Navbar/Menu';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const item = {
    nombre: 'Campera Origen',
    precio: 2500,
    coleccion: 'Lucida'
  }

  //jsx
  return(
    <div className="App" onClick ={ ()=>console.log() }>
      <h1>Arauca</h1>
      <Menu />
      <ItemListContainer greeting='Bienvenidos a Arauca' item={item} />
      <ItemCount min={1} max={10} />
      
    </div>
  )
}



export default App;