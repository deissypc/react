import '../dato/dato.css';
import '../../../pages/dashboard/dashboard.css';
import '../../formulario/campo/campo.css';

function Parte() {
  return (
    <div>
                <label>Numero de documento:</label>
                <input type="number" name="doc" value="1025417456"/>
                <br></br>
                <label>Apellidos:</label>
                <input type="text" name="apellidos" value="Vargas Pinzon"/>
                <br></br>
                <label>Pais de origen:</label>
                <input type="email" name="correo" value="Colombia"/>
                <br></br>
                <label>Telefono de contacto:</label>
                <input type="text" name="telefono" value="3135207460"/>
                <br></br>
                <label>Confirmar contraseña:</label>
                <input type="password" name="contr"/>
                <br></br>
             <button class="o"><a href="" class="w">Cambiar</a></button>
             </div>
           
  );
}

export default Parte;