import { IButtonSeeInstall } from "../../../interfaces/ButtonSeeInstall";
import './style.css'


export function Button({ text, link, color, backgroundColor }: IButtonSeeInstall) {
    const handleClick = () => {
        window.location.href = link;
    }
    return (
        <button
        id="button"
        onClick={handleClick}
        style={{color, backgroundColor}}
        className={`${color}`} >
            {text}
        </button>


    )
}
