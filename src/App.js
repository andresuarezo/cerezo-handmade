import React  from 'react';
import './App.css';
import NavBar from './componentes/navBar';
import {BrowserRouter, Switch , Route} from 'react-router-dom';
import Catalogo from './componentes/catalogo';
import Home from './componentes/Home';
import { CartContextProvider} from './componentes/cartContext';
import ItemContainer from './componentes/ItemDetailContainer';
import CartView from './componentes/CartView';
function App() {
  return (<>
<BrowserRouter>
<CartContextProvider >
  <NavBar  />
  <Switch>
     <Route exact path='/'>
       <Home />
     </Route>

     <Route  path='/catalogo'>
      <Catalogo/>
     </Route>

     <Route  path='/catalogo/:catId'>
      <Catalogo/>
     </Route>

     <Route path='/item/:id'>
      <ItemContainer  />
     </Route>

     <Route path='/Cart'>
      <CartView/>
     </Route>
     
   </Switch>
  </CartContextProvider>
</BrowserRouter>
  </>
  );

}

export default App;
