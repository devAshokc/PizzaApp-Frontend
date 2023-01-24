import React from 'react';
import Card from '@mui/material/Card';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CardContent from '@mui/material/CardContent';
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import InfoIcon from '@mui/icons-material/Info';
export function Pizzas({ pizza, id }) {
    const [Quantity, setQuantity] = useState(1)
    const [Variants, setVariants] = useState('small')
    const handleChange1 = (event) => {
        setVariants(event.target.value);
    };
    const handleChange2 = (event) => {
        setQuantity(event.target.value)
    }
    const navigate = useNavigate()
    const price = pizza.prices[0][Variants] * [Quantity]
    return <>
        <Card className="pizza-container"
            elevation={12} sx={{
                margin: 2,
                width: "300px",
                borderRadius: 3,
            }}>

            <Box
                component="img"
                sx={{
                    margin: 0,
                    cursor: "pointer",
                    objectFit: 'cover',
                    objectPosition: 'center',
                    height: { xs: 250, md: 250 },
                    width: { xs: "100%", md: "100%" },
                    borderRadius: "2%"
                }}
                alt={pizza.name}
                src={pizza.image}
            />
            <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Typography variant="h8" sx={{ marginBottom: "15px", fontSize: "1rem" }} component="div">
                        {pizza.name}
                        <IconButton color="primary" size="small" onClick={() => navigate(`/pizzas/menu/${id}`)}>
                            <InfoIcon />
                        </IconButton>
                    </Typography>
                </Box>
                <Typography sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box sx={{ mixWidth: 20 }}>
                        <FormControl size="medium">
                            <InputLabel id="demo-simple-select-label">Varients🍕</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={Variants}
                                label="Varients🍕"
                                onChange={handleChange1}
                            >
                                {pizza.Varients.map(n => {
                                    return <MenuItem value={n}>{n}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                    <Box sx={{ mixWidth: 20 }}>
                        <FormControl size="medium">
                            <InputLabel id="demo-simple-select-label">Quantity🤔</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={Quantity}
                                label="Quantity🤔"
                                onChange={handleChange2}
                            >
                                {[...Array(10).keys()].map((n) => {
                                    return <MenuItem value={n + 1}>{n + 1}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Box>
                </Typography>
                <Typography variant="body2" sx={{ display: "flex", justifyContent: "space-between", gap: 1, marginTop: "15px" }}>
                    <Typography variant="h6">Price:{price}</Typography>
                    <Button variant="contained" startIcon={<AddShoppingCartIcon />} sx={{ cursor: "pointer", fontSize: "13px" }} color="success">Cart</Button>
                </Typography>
            </CardContent>
        </Card>
    </>;
}

