import { ICardTimeLine } from "../../../interfaces/CardTimeLine";
import './style.css'

export function CardTimeLine({ title, year, image, description }: ICardTimeLine) {
    return (
        <div className="container-line">
            <img className="image-timeline" src={image} alt="" />
            <div className="container-info">
                <div className="container-title">
                    <h1>{year}</h1>
                    <h1>{title}</h1>
                </div>

                <p className="description">{description}</p>
            </div>

        </div>
    )
}