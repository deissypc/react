import '../campo/campo.css';
import {Link} from 'react-router-dom';
import './caja.css';


function Caja() {
  return (
    <div>
    <label>Numero de documento:</label>
    <input type="number" name="doc"></input>
    <br></br>
    <label>Apellidos:</label>
    <input type="text" name="apellidos"></input>
    <br></br>
   
    <label>Genero</label>
    <div class="l">
    <input type="radio" value="Hombre" name="genero" />Hombre
        <input type="radio" value="Mujer" name="genero" /> Mujer
        <input type="radio" value="Otro" name="genero" />Otro
        </div>
    <br></br>
    <label>Telefono de contacto:</label>
    <input type="text" name="telefono"></input>
    <br></br>
    <label>Foto:</label>
    <input type="file" name="foto"></input>
    <br></br>
    <label>Confirmar contraseña:</label>
    <input type="password" name="contr"></input>
    <br></br>
   
   <a href="" class="terminos" > <input type="checkbox" name="chkestado" id="chkestado"/> terminos 
   y condiciones</a>
  
    
  
  
   
       <br></br>
       <Link to="/Login"> <button class="blogin">Ingresar</button></Link>
        </div>
  );
}

export default Caja;