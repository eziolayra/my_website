import React, { useState } from 'react';
import Logo from "../Asset/Logo.svg";
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import { Box,Drawer,List,ListItem,ListItemButton,ListItemIcon, ListItemText} from '@mui/material';
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";



const Navbar = () => {
  const [openMenu,setOpenMenu] = useState(false)
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
      path: "Home.jsx",
    },
    {
      text: "About",
      icon: <InfoIcon />,
      path: "About.jsx",
    },
    {
      text: "Reviews",
      icon: <CommentRoundedIcon />,
      path: "Reviews.jsx",
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
      path: "Contact.jsx",
    },
    {
      text: "Cart",
      icon: <ShoppingCartRoundedIcon />,
      path: "",
    },
  ];

  return (
    <nav>
      <div className='nav-logo-container'>
      <img src={Logo} alt=''/>
      </div>
      <div className='navbar-links-container'>
        <a href='Home.jsx'>Home</a>
        <a href='About.jsx'>About</a>
        <a href='Review.jsx'>Reviews</a>
        <a href='Footer.jsx'>Contact</a>
        <a href=''>
            <BsCart2 className='navbar-cart-icon'/>
        </a>
        <button className='primary-button'>Book Now</button>
      </div>
      <div className='navbar-menu-container'>
        <HiOutlineBars3 onClick={()=> setOpenMenu(true)}/>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor='right'>
        <Box 
            sx={{width: 250}}
            role='presentation'
            onClick={() => setOpenMenu(false)}
            onkeyDown={() => setOpenMenu(false)}
        >
            <List>
            {menuOptions.map((item) =>(
                <ListItem key={item.text} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}/>
                    </ListItemButton>
                </ListItem>
            ) )}
            </List>
            
        </Box>
      </Drawer>
    </nav>
  )
}

export default Navbar
