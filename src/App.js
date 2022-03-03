import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartContextProvider } from './context/CartContext/CartContext';
import { NotificationServicesProvider } from './services/Notifications/NotificationServices';


const App = () => {

  return (
    <div className="App">
      <NotificationServicesProvider>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer />}/>
              <Route path='/category/:categoryId' element={<ItemListContainer />}/>
              <Route path='/detail/:productId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<CartContextProvider />}/>
            </Routes> 
        </BrowserRouter>
      </CartContextProvider>
      </NotificationServicesProvider>
    </div>
  );
}

export default App;
