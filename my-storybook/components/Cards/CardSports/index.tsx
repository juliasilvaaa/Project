import { ICardSport } from "../../../interfaces/CardSports";
import './style.css'

export function CardSports({title, image, imageHeightSize= 100, imageWidthSize = 100}: ICardSport){
    return(
        <div className="container-sport">
            <img
            className="image-cover"
            style={{width: imageWidthSize, height: imageHeightSize}} 
            src={image} 
            alt="" />

            <div className="overlay">
                <h1>{title}</h1>
            </div>

        </div>
    )
}