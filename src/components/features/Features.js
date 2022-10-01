import CardFeature from './Card-feature';
import './Features.css';

function  Features(){
    return(
        <section id="features">
        <h2 class="features-title">Razones por las que disfrutarás quedarte con nosotros</h2>
        <div className="features-description">

<CardFeature
texto='Lorem ipsum dolor'
background={true}
icono='fa-solid fa-bell-concierge'/>

<CardFeature
texto='Lorem ipsum dolor'
background={true}
icono='fa-solid fa-bed'/>
            
            <CardFeature
texto='Lorem ipsum dolor'
background={true}
icono='fa-solid fa-wifi'/>

<CardFeature
texto='Lorem ipsum dolor'
background={true}
icono='fa-solid fa-dumbbell'/>         
           
        </div>
</section>
)};
export default Features;