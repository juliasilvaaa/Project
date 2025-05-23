import { ICardAboutSbt } from "../../../interfaces/CardAboutSbt";
import './style.css'

export function CardAboutSbt({title, image, description}: ICardAboutSbt){
    return(
        <div className="card-info">
            <img className="image" src={image} alt="" />

            <div className="container-texts">
              <h1>{title}</h1>
            <p>{description}</p>  
            </div>
            
        </div>
    )
}