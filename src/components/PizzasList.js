import React, { useState, useEffect } from "react";
import { Pizzas } from "./Pizzas";
import { API } from "./global.js";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { useCartContext } from "./context/CartContext";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export function PizzasList() {
  const [pizzaList, setPizzaList] = useState([]);
  //step-1
  const { cart } = useCartContext();
  const token = localStorage.getItem("Authorization");
  const getPizzas = () => {
    fetch(`${API}/pizzas/menu`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((data) => data.json())
      .then((msg1) => setPizzaList(msg1));
  };
  //step-2
  // console.log(pizzaList)
  useEffect(() => getPizzas(), []);
  const { username } = useParams();
  const navigate = useNavigate();
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
  if(!token){
    navigate('/')
  }
  function handleClick(){
    localStorage.clear();
    window.location.reload();
    navigate('/')
  }
  return (
    <>
      <div className="home-pz">
        <AppBar className="navbar" position="fixed">
          <Toolbar>
            <Typography
              onClick={handleClick}
              className="logo"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              Piz<span className="logo-F">za</span>Hunt
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
            <Box sx={{ gap: 2 }}>
              <Button>
                <Badge
                  color="success"
                  badgeContent={cart.length}
                  onClick={() => navigate("/pizzas/menu/cart")}
                >
                  <ShoppingCartIcon
                    sx={{ cursor: "pointer", color: "white" }}
                  />
                </Badge>
              </Button>
              {/* <Button  onClick={() => navigate('/pizzas/add')} color="inherit">Add Pizza</Button> */}
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: "100%",
            justifyContent: "space-around",
            gap: 3,
            mt: 8,
          }}
        >
          {pizzaList.length > 0 &&
            pizzaList.map((n, i) => <Pizzas pizza={n} key={n.id} id={n.id} username={username} />)}
        </Box>
      </div>
    </>
  );
}
