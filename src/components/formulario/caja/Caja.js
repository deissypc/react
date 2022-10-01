import '../campo/campo.css';

import './caja.css';


function Caja() {
  return (
    <div>
    <label>Numero de documento:</label>
    <input type="number" name="doc"></input>
    
    <label>Apellidos:</label>
    <input type="text" name="apellidos"></input>
 

    <label>Genero</label>
    <div class="l">
    <input type="radio" value="Hombre" name="genero" />Hombre
        <input type="radio" value="Mujer" name="genero" /> Mujer
        <input type="radio" value="Otro" name="genero" />Otro
        </div>
    
    <label>Telefono de contacto:</label>
    <input type="text" name="telefono"></input>
    <br></br>
    <label>Foto:</label>
    <input type="file" name="foto"></input>
    <br></br>
    <label>Confirmar contraseña:</label>
    <input type="password" name="contr"></input>
    
</div>
       
  );
}

export default Caja;