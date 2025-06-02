import { useEffect, useState } from "react";
import { ICarousel } from "../../interfaces/Carousel";
import './style.css'

export function Carousel({images}: ICarousel){

    const [index, setIndex] = useState(0)

    // useEffect (como se fosse uma reação)
    useEffect(() => {
        // Interval - Quando determinado tempo passar, ele vai executar oque estiver dentro da função
        const timeInterval = setInterval(() => {
            // Quando quiser saber o ultimo item (length - 1)
            if(index + 1 > images.length - 1 ) {
                return setIndex(0)
            } 
            setIndex(index + 1)  
        }, 2000)


        // Limpar 
        return () => clearInterval(timeInterval)
    }, [])


    return(
        <div className="container-carousel">
            {images.map((image, idx) => {
                return(
                    <img className="images-carousel" src={image} alt="" style={{opacity: index === idx ? 1 : 0}} />
                )
            })}

        </div>
    )
}