import { IFooter } from "../../interfaces/Footer";
import './style.css'

export function FooterSbt({backgroundColor, information, image}: IFooter){
    return(
        <div id="footer" style={{backgroundColor}}>
            <img id="image-logo" src={image} alt="" />
            <h1 id="information">{information}</h1>
            
        </div>
    )
}