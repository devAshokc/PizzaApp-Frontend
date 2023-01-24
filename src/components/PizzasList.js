import React, { useState, useEffect } from 'react';
import { Pizzas } from "./Pizzas";
import { API } from "./global.js"
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import LocalMallIcon from '@mui/icons-material/LocalMall';
export function PizzasList() {
    const [pizzaList, setPizzaList] = useState([])
    //step-1
    const getPizzas = () => {
        fetch(`${API}/pizzas/menu`, {
            method: "GET",
        })
            .then((data) => data.json())
            .then((msg1) => setPizzaList(msg1))
    }
    //step-2
    useEffect(() => getPizzas(), [])
    const navigate = useNavigate()
    return <>
        <div className="home-pz">
            <AppBar className='navbar' position="fixed">
                <Toolbar>
                    <Typography onClick={() => navigate('/')} className='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Piz<span className='logo-F'>za</span>Hunt
                    </Typography>
                    <Button startIcon={<LocalMallIcon />} onClick={() => navigate('')} color="inherit">Cart</Button>
                </Toolbar>
            </AppBar>
            <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%", justifyContent: "space-around", gap: 3, mt: 8 }}>
                {pizzaList.map((n, i) =>
                    <Pizzas
                        pizza={n}
                        key={n.id}
                        id={n.id} />)}
            </Box>
        </div>
    </>;
}

