import { IInscriptions } from "../../interfaces/Inscriptions";
import { ButtonInscriptions } from "../../stories/Buttons/ButtonInscription.stories";
import { ButtonInscription } from "../Buttons/ButtonInscription";
import './style.css'


export function Inscriptions({ title, image, qntd, description }: IInscriptions) {
    return (
        <div className="inscription-card">
            <img src={image} alt="Imagem" className="inscription-image" />

                           <ButtonInscription {...ButtonInscriptions.args} />
 
        </div>
    );
}
