import './header.css';
import {Link} from 'react-router-dom';
import logo from './Hotelia horizontal blanco.svg';
import './main';
 function Header(){
    return(
    
        <header>
  <nav>
            <div class="logo">
                <img src={logo}/>
                <i class="fa-solid fa-bars" id="icon"></i>
            </div>
            
            <div class="menu" id="menu">
                <a href="grid.html" class="item">Inicio</a>
                <a href="#ubicacion" class="item">Ubícanos</a>
                <a href="#opinion" class="item">Opiniones</a>
                <hr class="menu-hr" noshade=""/>
                <Link to="/Login">
                   <button class="navbar-button">
                     <i class="fa-solid fa-user"></i> Iniciar Sesión
                   </button></Link>
                
            </div>
        </nav>




             
     
    
        </header>
        
    );
 }

 
 export default Header;