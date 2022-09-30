import './header.css';
import {Link} from 'react-router-dom';
import logo from './Hotelia horizontal blanco.svg';

 function Header(){
    return(
    
        <header>
             <nav id="logo-navbar">
      <div class="logo">
        <img  src={logo}></img>
        <i class="fa-solid fa-bars" id="icon"></i>
      </div>
      
      <div class="menu" id="menu">
        <a href="index.html" class="item">Inicio</a>
        <a href="#ubicanos" class="item">Ubícanos</a>
        <a href="#opiniones" class="item">Opiniones</a>
        <Link to="/Login"><button class="navbar-button">
           <i class="fa-solid fa-user"></i> Iniciar Sesión
          </button></Link>
      </div>
    </nav>
   
        </header>
        
    );
 }

 
 export default Header;