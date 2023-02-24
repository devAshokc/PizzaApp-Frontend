import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import {Button, AppBar, Toolbar, Typography} from '@mui/material';
import { useCartContext } from './context/CartContext';
import { useNavigate } from 'react-router-dom';
// import { UserAuth } from './context/AuthContext';
// import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { API } from './global';

function Checkout() {

    const { cart, total_price, total_items } = useCartContext()
    // const { user, user1 } = UserAuth()

    // const email = localStorage.getItem("email")

    // let orderItems = () => {
    //     const orderDetails = {
    //         email : email || user.email,
    //         name : user1.fullName || user.displayName,
    //         Quantity : total_items,
    //         total : total_price
    //       }
    //     fetch(`${API}/pizzas/menu/send`,{
    //       method:"POST",
    //       body: JSON.stringify(orderDetails),
    //       headers: {
    //         "Content-Type" : "application/json",
    //           Authorization:token

    //     },
    //     })
    //         .then((data) => data.json())
    //           .then((data) => console.log(data),
    //           toast.success('Mail Sent Regarding Your Orders', {
    //             position: "top-center",
    //             autoClose: 5000,
    //             hideProgressBar: false,
    //             closeOnClick: true,
    //             pauseOnHover: true,
    //             draggable: true,
    //             progress: undefined,
    //             theme: "light",
    //             })
    //           )
    //           .then((list) => console.log(list))
    //   }

      let navigate = useNavigate()

const token = localStorage.getItem("Authorization")

if(!token){
  navigate("/")
}

  return <>
   <AppBar className='navbar' position="static">
            <Toolbar>
                <Typography onClick={() => navigate('/pizzas/menu')} className='logo' variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Piz<span className='logo-F'>za</span>Hunt
                </Typography>
                <Button onClick={() => navigate('/pizzas/menu/cart')} color="inherit">Cart</Button>
                <Button onClick={() => navigate('/pizzas/menu')} color="inherit">Pizzas</Button>
            </Toolbar>
        </AppBar>
<Paper sx={{padding:"30px 10px",width:{xs:"95%",sm:"90%",md:"50%"},margin:"0px auto",textAlign:"center", marginTop:"10px"}}>
        <h4 style={{fontSize:"14px",lineHeight:"20px"}}>Make Your Payment here by Entering Your Address to send the Product to Your Address.</h4>


        {
     cart.map((e,i) => {
        const { _id, name, image, price, Variants, Quantity } = e
        let total = price * Quantity
        return (
            <Paper key={_id} sx={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:{xs:1,sm:3,md:3},flexWrap:"wrap",margin:"30px 0px",flexDirection:{xs:"column",sm:"row",md:"row",padding:"12px"}}}>
             <Box
        component="img"
        sx={{
            margin:0,
          objectFit:'cover',
          objectPosition:"top",
          width: { xs: '80px',sm:"80px", md: '100px' },
          height:"80px"
        }}
        alt="The house from the offer."
        src={image}
        />
        <p style={{fontSize:"14px",fontWeight:700,margin:"8px 0px"}}>Name<br/><br/>{name}</p>
        <p style={{fontSize:"14px",fontWeight:700,margin:"8px 0px"}}>Price<br/><br/>₹{price}</p>
        <p style={{fontSize:"14px",fontWeight:700,margin:"8px 0px"}}>Quantity<br/><br/>{Quantity}</p>
        <p style={{fontSize:"14px",fontWeight:700,margin:"8px 0px"}}>Total Price<br/><br/>₹{total}</p>
        {/* <p>{name}</p> */}
            </Paper>
        )
    })
}
        
        <hr/>

        <p style={{fontSize:"14px",fontWeight:700,margin:"8px 0px"}}>Total Order Amount<br/><br/>₹{total_price}</p>

        <hr/>

        
        {/* <Button variant="contained" color="success"sx={{padding:"7px 15px",margin:"8px 0px 8px 0px",width:"100%"}} onClick={orderItems}>Make Payment</Button> */}
</Paper>

  </>
}

export default Checkout