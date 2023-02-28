import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API } from './global.js'
import Box from '@mui/material/Box'
import Badge from "@mui/material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";
import { Button, AppBar, Toolbar, Typography } from '@mui/material'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export function PizzaDetails() {
    const navigate = useNavigate()
    const { id, username } = useParams();
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
    const StyledBadge = styled(Badge)(({ theme }) => ({
        "& .MuiBadge-badge": {
          backgroundColor: "#44b700",
          color: "#44b700",
          boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
          "&::after": {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: "ripple 1.2s infinite ease-in-out",
            border: "1px solid currentColor",
            content: '""',
          },
        },
        "@keyframes ripple": {
          "0%": {
            transform: "scale(.8)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(2.4)",
            opacity: 0,
          },
        },
      }));
    return <>
        <AppBar className='navbar' position="static">
            <Toolbar>
                <Typography onClick={() => navigate('/pizzas/menu')} className='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Piz<span className='logo-F'>za</span>Hunt
                </Typography>
                <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "Top", horizontal: "right" }}
                variant="dot"
              >
                <Button startIcon={<AccountCircleIcon />} color="inherit">
                  {username}
                </Button>
              </StyledBadge>
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
