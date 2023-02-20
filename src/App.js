import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home.js'
import { Signup } from './components/Signup.js'
import { Login } from './components/Login.js'
import { PizzasList } from './components/PizzasList.js'
import { PizzaDetails } from './components/PizzaDetails.js'
import AddPizzas from './components/AddPizzas.js'
import Cart from './components/Cart'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div className="App">
      <div className='routes-container'>
      <ToastContainer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users/Signup' element={<Signup />} />
          <Route path='/users/login' element={<Login />} />
          <Route path='/pizzas/menu' element={<PizzasList />} />
          <Route path='/pizzas/cart' element={<Cart />} />
          <Route path='/pizzas/add' element={<AddPizzas />} />
          <Route path='/pizzas/menu/:id' element={<PizzaDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

