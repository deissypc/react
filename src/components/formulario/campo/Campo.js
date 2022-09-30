import './campo.css';


function Campo() {
  return (
    <div>
    <label>Tipo de documento:</label>
            <br></br>   
            <select>
                <option>Escoja una opcion</option>
                <option>CC</option>
                <option>TI</option>
                <option>Extrangero</option>
            </select>
            <br></br>
            <label>Nombres:</label>
            <input type="text" name="tipo"></input>
            <br></br>
            <label>Fecha de nacimiento:</label>
            <input type="date" name="fecha"></input>
            <br></br>
            <label>Email:</label>
            <input type="email" name="correo"></input>
            <br></br>
            <label>Pais de origen:</label>
            <br></br>
            <select>
                <option>Colombia</option>
                <option>Argentina</option>
                <option>Peru</option>
            </select>
            <br></br>
            <label>Contraseña:</label>
            <input type="password" name="con"></input>
            </div>
  );
}

export default Campo;