import { INoticie } from "../../../interfaces/CardNoticies";
import './style.css'

export function CardInfoNoticie({categorie, title, resume,image, description}: INoticie){
    return(
        <div>
            <div className="container-constrast">
                <h1 className="text-categorie">{categorie}</h1>
                <h1>{title}</h1>
                <p className="text-resume">{resume}</p>
            </div>

            <img className="image-constrast" src={image} alt="" />

            <div className="container-description">
                <h1>{description}</h1>
            </div>

        </div>
    )
}