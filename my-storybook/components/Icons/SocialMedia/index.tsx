import { ISocialMedia } from "../../../interfaces/SocialMedia";
import './style.css'

export function SocialMedia({ image, title, size }: ISocialMedia) {

    return (
        <div id="container">
            <img id="logo" className={`logo ${size}`} src={image} alt={title} />

        </div>
    )
}