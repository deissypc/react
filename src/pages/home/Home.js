import './Home.css';

import Header from '../../components/header/header';
import Section from '../../components/section/Section';
import Descripcion from '../../components/descripcion/Descripcion'
import Features from '../../components/features/Features';
import Ubicacion from '../../components/ubicacion/Ubicacion';
import Opinion from '../../components/opinion/Opinion';
import Footer from '../../components/footer/Footer';


function Home(){
    return(
        
        <div>
    <Header />
    <Section />
    <Descripcion />
    <Features />
    <Ubicacion />
    <Opinion />
    <Footer /></div>
    ); 
}
export default Home;