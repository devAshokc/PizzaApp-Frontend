import React, { useState, useEffect } from 'react';
import { Pizzas } from "./Pizzas";
import { API } from "./global.js"
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import { useCartContext } from './context/CartContext';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export function PizzasList() {
    const [pizzaList, setPizzaList] = useState([])
    //step-1
    const{cart}= useCartContext()
    const token = localStorage.getItem('Authorization')
    console.log(token)
    const getPizzas = () => {
        fetch(`${API}/pizzas/menu`, {
            method: "GET",
            headers :{
                Authorization: token
            }
          
        })
            .then((data) => data.json())
            .then((msg1) => setPizzaList(msg1))
    }
    //step-2
    // console.log(pizzaList)
    useEffect(() => getPizzas(), [])
    const navigate = useNavigate()
    return <>
        <div className="home-pz">
            <AppBar className='navbar' position="fixed">
                <Toolbar>
                 <Typography onClick={() => navigate('/pizzas/menu')} className='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Piz<span className='logo-F'>za</span>Hunt
                    </Typography>
                  <Box sx={{gap:2}}>
                    <Button>
                    <Badge color='success' badgeContent= {cart.length} onClick={()=>navigate('/pizzas/menu/cart')}>
                    <ShoppingCartIcon sx={{cursor:"pointer", color:"white"}} />
                    </Badge>
                    </Button>
                  {/* <Button  onClick={() => navigate('/pizzas/add')} color="inherit">Add Pizza</Button> */}
                    <Button onClick={() => navigate('/')} color="inherit">Logout</Button>
                  </Box>
                </Toolbar>
            </AppBar>
            <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "space-around", gap: 3, mt: 8 }}>
                {pizzaList.length > 0 && pizzaList.map((n, i) =>
                    <Pizzas
                        pizza={n}
                        key={n.id}
                        id={n.id} />)}
            </Box>
        </div>
    </>;
}

