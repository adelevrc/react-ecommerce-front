import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/logo-noir.png'; 
import Badge from '@material-ui/core/Badge';
import { useHistory } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi';
import cart from '../img/cart-white.svg';

import '../styles/Nav.scss'; 


const Nav = ({token, numberOfCartItems}) => {
    let history = useHistory();

    const [open, setOpen] = useState(false); 

    const LogoutHandler = async e => {
        e.preventDefault();
        localStorage.removeItem('token');
        history.push("/authentification");
        window.location.reload();
    }

    

    return(
        <nav className="navbar">
             <Link to={`/`} className="nav-logo" onClick={() => setOpen(false)}>
                <img className="logo" src={logo} alt="logo"/>
            </Link>

            <Link style={{ textDecoration: 'none' }} to={`/cart`}>
                <Badge badgeContent={numberOfCartItems()} color="primary"
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
            >
                <img src={cart} className="cart"alt="icone-chariot" />
                </Badge>
            </Link>

            <div className={`${token ? '' : 'not-connected'}`}>
                    <button className='logout-btn' onClick={LogoutHandler}> Déconnexion </button>
            </div>
        
            <div onClick={() => setOpen(!open)} className="nav-icon">
                {open ? <FiX /> : <FiMenu />}
            </div>

        <ul className={open ? 'nav-links active' : 'nav-links'}>
            <li className="nav-item">
                <Link to={`/produits`} className="nav-logo" onClick={() => setOpen(false)}>
                    <h1>Boutique</h1>
                </Link>
            </li>

            <li className="nav-item">
                <Link to={`/animals`} className="nav-logo" onClick={() => setOpen(false)}>
                    <h1>Animaux</h1>
                </Link>
            </li>

            <div className={`${token ? 'connected' : ''}`}> 
                <li className="nav-item">
            
                        <Link to={"/authentification"} className="nav-logo" onClick={() => setOpen(false)}>
                            <h1 className="nav-connexion">Connexion</h1>
                        </Link>
                </li>
            </div>

            <div className={`${token ? '' : 'not-connected'}`}> 
                <li className="nav-item">
                    
                        <Link to={"/profile"} className="nav-logo" onClick={() => setOpen(false)}>
                            <h1 className="nav-connexion">Mon compte</h1>
                        </Link>
                </li>
            </div>

            <li className="nav-item">
                <Link to={`/contact`} className="nav-logo" onClick={() => setOpen(false)}>
                    <h1>Nous contacter</h1>
                </Link>
            </li>



        </ul>
        </nav>
    )
}

export default Nav;