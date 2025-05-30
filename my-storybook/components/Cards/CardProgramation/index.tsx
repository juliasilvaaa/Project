import { IProgramation } from "../../../interfaces/CardProgramation";
import styles from './style.module.css';

export function CardProgramation({image, hour, title_program, cardSize}: IProgramation){
    return(
        <div
        style={{height: cardSize, width: cardSize}} 
        className={`${styles.containerCard} ${cardSize === 'large' ? styles.cardLarge : styles.cardSmall}`}>

            <img className={styles.image} src={image} alt="" />

            <div className={styles.containerText}>
                <h1 className={styles.textHour}>{hour}</h1>
                <h1 className={styles.textTitle}>{title_program}</h1>
            </div>

        </div>
    )
}