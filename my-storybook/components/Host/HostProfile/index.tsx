import { IHost } from "../../../interfaces/HostProfile";
import './style.css'

export function HostProfile({image, size, name}: IHost){
    return(
        <div className="container-profile">
            <img className={`image-profile ${size}`} src={image} alt="Profile" />
            <h1 className="name-host">{name}</h1>
        </div>

    )
}