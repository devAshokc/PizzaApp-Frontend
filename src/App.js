import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './components/Home.js'
import { Signup } from './components/Signup.js'
import { Login } from './components/Login.js'
import { PizzasList } from './components/PizzasList.js'
import { PizzaDetails } from './components/PizzaDetails.js'

function App() {

  return (
    <div className="App">
      <div className='routes-container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users/Signup' element={<Signup />} />
          <Route path='/users/login' element={<Login />} />
          <Route path='/pizzas/menu' element={<PizzasList />} />
          <Route path='/pizzas/menu/:id' element={<PizzaDetails />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
