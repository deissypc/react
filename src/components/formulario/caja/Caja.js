import '../campo/campo.css';
import Modal from './Modal';
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
   
   <a href={Modal} class="terminos" > <input type="checkbox" name="chkestado" id="chkestado"/> terminos 
   y condiciones</a>
  
        <div class="ventana">
        <div class="modal_con">
            <h1>Terminos y Condiciciones</h1>    
        <p>Estos terminos de servicio reflejan la forma
            de trabajar de google como empresa, las
            leyes por las que nos regimos y determinados 
            aspectos que siempren hemos creido que son
            ciertos. Por ello, estos terminos de servicios a
            yudan a definir la relacionque tiene Google
            contigo cunado interatuas con nuestros
            servicios. Por ejemplo estos terminoos
            incluyen las siguientes seccione:
            Que puedes esperar de nosotros,donde se  
            describecomo proporcionamos yudandesarrollamos nuestros servicio,
            Loque esperamos de ti, donde se establecen 
            ciertas reglas para utlizar nuestros servicios.  
        </p>
        <a href="" class="cerrar">Aceptar</a>
       </div>
       </div>
    
  
  
   
       <br></br>
        <button class="blogin">Ingresar</button>
        </div>
  );
}

export default Caja;