import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContext } from './components/CartContext/CartContext';

export const MyContext = React.createContext('No hay productos');

const App = () => {

  const [cart, setCart] = useState('Productos a comprar');
  console.log(cart);

  return (
    <div className="App">
        <BrowserRouter>
          <NavBar/>
          <MyContext.Provider value={{ cart, setCart }}>
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer />}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<CartContext />}/>
            </Routes>
          </MyContext.Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;
