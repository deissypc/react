import {Link} from 'react-router-dom';
import React from 'react';
import {Button, Modal, ModalHeader,ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
class Mod extends React.Component{
    state={
        abierto:false,
    }

    abrirModal=()=>{
      this.setState({abierto: !this.state.abierto});  
    }
render(){
  return(
    <>
   <p> 
    <Button color="primary" onClick={this.abrirModal}>terminos 
   y condiciones</Button></p>
   <Link to="/Login"> <button class="blogin">Ingresar</button></Link>

   <Modal isOpen={this.state.abierto}>
<ModalHeader  >
Terminos y Condiciones
</ModalHeader>
<ModalBody>
Estos terminos de servicio reflejan la forma
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
       
</ModalBody>
<ModalFooter>
<Button color='primary' onClick={this.abrirModal}>Aceptar</Button>
</ModalFooter>
   </Modal>
   </>
  )  
}
}
 export default Mod;