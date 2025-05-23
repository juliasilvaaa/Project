import { IButtonLive } from "../../../interfaces/ButtonLive";
import './style.css'

export function ButtonLive({title, color, liveOn = false, size = 'medium'}: IButtonLive){
    return(
        <button className={`live-status ${liveOn ? 'on' : 'off'} ${size}`}>
            <h1 style={{color}}>{title}</h1>
            {/* {liveOn ? 'Live On' : 'Live Off'} */}
        </button>
    )
}