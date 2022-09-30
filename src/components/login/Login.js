import './Login.css';
import avatar from './avatar.png';
import './fondocaja2.png';
import logo from './Hotelia horizontal negro.svg';
 function Login(){
    return(
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
              <a href="dashboard.html" class="ingresar">ingresar</a><br></br><br></br>
              <p>¿No tienes una cuenta? <a class="registrate" href="registro.html">Registrate aqui</a> </p>
              </div>

             </div>
             );
 }
export default Login;