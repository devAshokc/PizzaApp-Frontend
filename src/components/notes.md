import { Box,Paper, AppBar, Toolbar, Typography, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useCartContext } from './context/CartContext'
export default function Cart() {
  const {cart} = useCartContext()
  const navigate = useNavigate()
  return <>
   <Box>
  <AppBar className='navbar' position="static">
            <Toolbar>
                <Typography onClick={() => navigate('/pizzas/menu')} className='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Piz<span className='logo-F'>za</span>Hunt
                </Typography>
                <Button onClick={() => navigate('/pizzas/menu')} color="inherit">Back to Pizzas</Button>
            </Toolbar>
        </AppBar>
  </Box>
  {cart.map((e)=>{
    return<List cart={e} key={e._id}/>
  })}
  </>
}
function List({cart}){
  const {removeItem} = useCartContext()
console.log(cart)
  return <>

  <Box sx={{width:{xs:"85%",sm:"90%",md:"85%"},margin:"0px auto",padding:"20px 0px"}}>
  <Paper key={cart._id} sx={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:{xs:1,sm:4,md:15},flexWrap:"wrap",margin:"30px 0px",flexDirection:{xs:"column",sm:"row",md:"row",padding:"12px"}}}>
  <Box
        component="img"
        sx={{
            margin:0,
          objectFit:'cover',
          objectPosition:"top",
          width: { xs: '100px',sm:"100px", md: '200px' },
          height:"100px"
        }}
        alt="The house from the offer."
        src={cart.image}
        />
     <Typography style={{fontSize:"13px",fontWeight:700,margin:"8px 0px"}}>{cart.name}</Typography>
        <Typography style={{fontSize:"13px",fontWeight:700,margin:"8px 0px"}}>{cart.Quantity}</Typography>
        <Typography style={{fontSize:"13px",fontWeight:700,margin:"8px 0px"}}>{cart.Variants}</Typography>
        <Typography style={{fontSize:"13px",fontWeight:700,margin:"8px 0px"}}>₹{cart.price}</Typography>
        <Button onClick={()=> removeItem(cart._id)}>Remove</Button>
    </Paper>
  </Box>
    
  </>
}

