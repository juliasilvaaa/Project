import { IHostAbout } from "../../../interfaces/HostAbout";
import './style.css'


export function HostAbout({ name_host, image, description }: IHostAbout) {
    return (
        <div className="container-host">
            <img className="profile-host" src={image} alt="" />

            <div className="container-text">
                <h1 className="name-host">{name_host}</h1>
                <p className="description-host">{description}</p>
            </div>


        </div>
    )


}