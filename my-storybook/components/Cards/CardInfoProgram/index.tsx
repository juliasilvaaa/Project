import { IProgram } from "../../../interfaces/CardProgram";
import './style.css'

export function CardInfoProgram({ categorie, title, image, about }: IProgram) {
    return (
        <div className="container-info">
            <img className="image-cover" src={image} alt="" />

            <div className="container-texts">
                <h1 className="text-categorie">{categorie}</h1>
                <h1 className="text-title">{title}</h1>
                <h1 className="text-about">Sobre</h1>
                <hr className="line" />
                <p className="text-description">{about}</p>

                {/* <h1>Apresentador</h1> */}
            </div>
        </div>
    )
}