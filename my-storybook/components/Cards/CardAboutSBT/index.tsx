import { ICardAboutSbt } from "../../../interfaces/CardAboutSbt";
import './style.css'

export function CardAboutSbt({title, image, description}: ICardAboutSbt){
    return(
        <div className="card-info">
            <img className="image" src={image} alt="" />

            <div className="container-texts">
              <h1 className="title">{title}</h1>
            <p className="description">{description}</p>  
            </div>
            
        </div>
    )
}