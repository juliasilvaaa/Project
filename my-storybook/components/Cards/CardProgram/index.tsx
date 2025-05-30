import { IProgram } from "../../../interfaces/CardProgram";
import './style.css'

export function CardPrograms({image, imageWidthSize= 100, imageHeightSize = 100}: IProgram){
    return(
        <div>
            <img 
            className="image-cover"
            src={image} 
            style={{ width: imageWidthSize, height: imageHeightSize}}
            alt="Image Program" />

        </div>
    )
}