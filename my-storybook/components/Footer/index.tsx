import { IFooter } from "../../interfaces/Footer";
import { SocialMedia } from "../Icons/SocialMedia";
import './style.css'


export function FooterSbt({backgroundColor, information, image, icons}: IFooter){
    return(
        <div id="footer" style={{backgroundColor}}>
            <img id="image-logo" src={image} alt="" />
            <h1 className="information">{information}</h1>

            <div className="icons">
                {icons.map((icon) => {
                    return(
                        // Iterando os parametros do componente, sem precisar especificar manualmente cada um (se caso quiser especificar )

                        <SocialMedia {...icon}/>

                        // Rescrevendo em cima do parametro do componente ( ele espera primeiro receber os dados para depois reescrever)
                        // <SocialMedia {...icon} title="Todos agora tem o nome facebook" />
                    )
                })}
            </div>

            
        </div>
    )
}