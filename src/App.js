import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      {/* <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/item/:itemID" element={<ItemDetailContainer/>}/>
        </Routes>
    </BrowserRouter> */}
    <ItemListContainer/>
    <ItemDetailContainer/>
    </div>
  );
}

export default App;
