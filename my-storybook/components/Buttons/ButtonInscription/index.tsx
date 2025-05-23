import { IButtonInscription } from '../../../interfaces/ButtonInscription'; 
import './style.css'


export function ButtonInscription({ size = 'medium', text,  color, backgroundColor }: IButtonInscription) {
    return (
        <button
    
        style={{color, backgroundColor}}
        className={`button-inscription ${size}`} >
            {text}
        </button>


    )
}
