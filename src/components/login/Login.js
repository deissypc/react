import './Login.css';
import avatar from './avatar.png';
import './fondocaja2.png';
import logo from './Hotelia horizontal negro.svg';
import {Link} from 'react-router-dom';
 function Login(){
    return(
       <section id="logi">
        <div  class="contenedor">
              <div class="cajalogo" >
                
              <img class="logo" src={logo} />
              </div>
              
              <div class="form-login">
              
              <img class="avatar" src={avatar} alt=""/>
              <label>Usuario:</label>
              <input class="cajitas" type="text" name="usuario" value="" />
              <label>Contraseña:</label>
              <input class="cajitas" type="password" name="contraseña" value=""/>
              <Link to="/Dashboard"><a href="" class="ingresar">ingresar</a></Link><br></br><br></br>
              <Link to="/Formulario"><p>¿No tienes una cuenta? <a class="registrate" href="">Registrate aqui</a> </p></Link>
              </div>

             </div>
             </section>
            
             );
 }
export default Login;