import { IInscriptions } from "../../interfaces/Inscriptions";
import { ButtonInscription } from "../Buttons/ButtonInscription";
import './style.css'


export function Inscriptions({ title, image, qntd, description, button }: IInscriptions) {
    return (
        <div className="inscription-card">
            <img src={image} alt="Imagem" className="inscription-image" />

<div className="card-button">
   
                <ButtonInscription {...button} />
             
</div>

        </div>
    );
}
