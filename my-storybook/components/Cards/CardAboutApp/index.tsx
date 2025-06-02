import { IApp } from "../../../interfaces/CardAbouAPP";
import { Button } from "../../Buttons/ButtonSeeAndInstall";
import './style.css'

/** Responsável por exibir as informações do aplicativo mais sbt */
export function CardAboutAPP({ image, title, categorie, description, button }: IApp) {
    return (
        <div className="container">
            <img className="image" src={image} alt="Image Logo App" />

            <div className="container-text">
                <h1 className="categorie">{categorie}</h1>
                <h1 className="title">{title}</h1>
                <h1 className="about">Sobre</h1>
                <hr className="line" />
                <p className="description">{description}</p>

                <div className="container-button">
                    <Button {...button} />

                </div>

            </div>


        </div>
    )
}