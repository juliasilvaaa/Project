import { IHost } from "../../../interfaces/HostProfile";
import './style.css'

export function HostProfile({image, size}: IHost){
    return(
        <div className="container-profile">
            <img className={`image-profile ${size}`} src={image} alt="Profile" />
        </div>

    )
}