import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from './global.js'
import Box from '@mui/material/Box'
import { Button, AppBar, Toolbar, Typography } from '@mui/material'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export function PizzaDetails() {
    const navigate = useNavigate()
    const { id } = useParams();
    const [PizzaDetail, setPizzaDetail] = useState({});
    // const getUserDetails = () => {
      
    // }
    useEffect(() => {
        fetch(`${API}/pizzas/menu/${id}`)
        .then((data) => data.json())
        .then((msg1) => setPizzaDetail(msg1));
    }, [id]);
    const styles = {
        // Ternary Operator
        color: PizzaDetail.category === 'nonveg' ? "red" : "green",
        fontSize: "20px"
    };
    return <>
        <AppBar className='navbar' position="static">
            <Toolbar>
                <Typography onClick={() => navigate('/pizzas/menu')} className='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Piz<span className='logo-F'>za</span>Hunt
                </Typography>
                <Button onClick={() => navigate('/pizzas/menu')} color="inherit">Back to Pizzas</Button>
            </Toolbar>
        </AppBar>
        <Box sx={{ minHeight: "100vh", marginTop: "1rem"}}>
            <Box sx={{ width: "70%", margin: "0px auto", display: "flex", gap:1 , flexDirection: { xs: "column", sm: "row", md: "row" } }}>
                <Box
                    component="img"
                    sx={{
                        margin: 0,
                        objectFit: 'cover',
                        objectPosition: 'center',
                        height: { xs: 350, md: 450 },
                        width: { xs: '210', md: '410' },
                        borderRadius: "5%"
                    }}
                    alt="The house from the offer."
                    src={PizzaDetail.image}
                />
                <Box sx={{ padding: { xs: "20px 20px", sm: "70px 20px", md: "70px 50px" }, textAlign: { xs: "left", sm: "left" } }}>
                    <h1 style={{ fontSize: "20px" }}>{PizzaDetail.name}</h1>
                    <h1 style={styles}>⭐ {PizzaDetail.category}</h1>
                    <Button variant="contained" color='success' startIcon={<ArrowLeftIcon />} onClick={() => navigate(-1)}>Back</Button>
                </Box>
            </Box>
        </Box>
    </>;
}
