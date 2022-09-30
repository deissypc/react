import './dato.css';
import '../../../pages/dashboard/dashboard.css';
import '../../formulario/campo/campo.css';

function Dato() {
  return (
    <div> 
    <h1>Bienvenid@, Angie Vargas</h1>
<label>Tipo de documento:</label>
<br></br>   
<input type="text" name="tipo"  value="Cédula de ciudadanía"/>
<br></br>
<label>Nombres:</label>
<input type="text" name="tipo" value="Angie Camila"/>
<br></br>
<label>Fecha de nacimiento:</label>
<input type="text" name="fecha" value="10/08/1976"/>
<br></br>
<label>Genero</label>
<br></br>
<div class="l">
    <input type="radio" value="Hombre" name="genero" />Hombre
        <input type="radio" value="Mujer" name="genero" checked/> Mujer
        <input type="radio" value="Otro" name="genero" />Otro
        </div> 
        <label>Email:</label>
                <input type="email" name="correo" value="angievargas2@gmail.com"/>
                <br></br>
                <button class="o"><a href="" class="w">Actualizar</a></button>
                <br></br>
                <label>Contraseña:</label>
                <input type="password" name="con"/>
            </div>
           
  );
}

export default Dato;