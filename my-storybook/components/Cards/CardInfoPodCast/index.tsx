import { IInfoPodCast } from "../../../interfaces/CardInfoPodCast" 
import './style.css'



export function CardInfoPodCast({categorie, title, image, description}:IInfoPodCast){
    return(
        <div className="card-info">
            <img className="img-podcast" src={image} alt="" />

            <div className="container-text">
                <p className="text-categorie">{categorie}</p>
                <h1 className="text-title">{title}</h1>

                <h1 className="text-about">Sobre</h1>
                <hr className="line" />
                <p className="text-description">{description}</p>
            </div>

        </div>
    )
}