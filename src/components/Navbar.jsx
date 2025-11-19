import React from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
       <nav className='nav' style={{
         display:'flex',
         justifyContent: 'space-around',
         alignItems: 'center',
         flexWrap: '1',
         minHeight: '6vh',
         width: '100%',
         margin: '0px',
         }}>
        
        <Link to='/' style={{color: 'orangered', textDecoration: 'none'}}> <h1>EDCOINS</h1></Link>

        <div style={{
            display: 'flex',
            gap: '10px'
        }}>
            <Link to='/' style={{textDecoration: 'none', 
                color: 'orangered'
            }}> HOME</Link>
            <Link to='/market' style={{textDecoration: 'none', 
                color: 'orangered'
            }}>MARKET</Link>
            <Link to='/contact' style={{textDecoration: 'none', 
                color: 'orangered'
            }}>CONTACT</Link>
        </div>
       </nav>
    );
};

export default Navbar;
