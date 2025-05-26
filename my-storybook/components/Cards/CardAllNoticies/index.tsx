import { INoticie } from "../../../interfaces/CardNoticies";
import './style.css'

export function CardAllNoticies({categorie, title, image, resume}: INoticie){
    return(
       <div className="container-noticie">
        <img className="image" src={image} alt="" />

        <div className="container-text">
            <h1 className="text-categorie">{categorie}</h1>
            <h1 className="text-title">{title}</h1>
            <p className="text-resume">{resume}</p>
        </div>

    </div>  
    )
   
}