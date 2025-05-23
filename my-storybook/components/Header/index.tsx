import { IHeader } from "../../interfaces/Header";
import './style.css'

export function HeaderSbt({backgroundColor, image}:IHeader){
    return(
        <div id="header" style={{backgroundColor}}>
            <img id="logo" src={image} alt="Logo" />
        </div>
    )
}