import { IApp } from "../../../interfaces/CardAbouAPP";
import './style.css'

export function CardAboutAPP({ image, title, categorie, description }: IApp) {
    return (
        <div className="container">
            <img className="image" src={image} alt="Image Logo App" />

            <div className="container-text">
                <h1 className="categorie">{categorie}</h1>
                <h1 className="title">{title}</h1>
                <h1 className="about">Sobre</h1>
                <hr className="line" />
                <p className="description">{description}</p>
            </div>




        </div>
    )
}