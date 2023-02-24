import './App.css';
import  Checkout  from './components/Checkout';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home.js'
import { Signup } from './components/Signup.js'
import { Login } from './components/Login.js'
import { PizzasList } from './components/PizzasList.js'
import { PizzaDetails } from './components/PizzaDetails.js'
import AddPizzas from './components/AddPizzas.js'
import Cart from './components/Cart.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  
  const token = localStorage.getItem("Authorization")
  return (
    <div className="App">
      <div className='routes-container'>
      <ToastContainer />
        <Routes>
        {
           token ? 
                <Route path='/pizzas/menu' element={<PizzasList/>}/>
              :
                <Route path='/users/login' element={<Login/>}/>
         }
          <Route path='/' element={<Home />} />
          <Route path='/users/Signup' element={<Signup />} />
          <Route path='/users/login' element={<Login />} />
          <Route path='/pizzas/menu' element={<PizzasList />} />
          <Route path='/pizzas/menu/cart' element={<Cart />} />
          <Route path='/pizzas/add' element={<AddPizzas />} />
          <Route path='/pizzas/menu/:id' element={<PizzaDetails />} />
          <Route path='/pizzas/menu/cart/checkout' element={<Checkout/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

