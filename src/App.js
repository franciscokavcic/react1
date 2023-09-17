import './App.css';
import NavBar from'./components/Navbar/NavBar';
import ItemListConteiner from'./components/ItemListConteiner/ItemListConteiner'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListConteiner greeting={'Bienveindo'}/>
    </div>
  );
}

export default App;
