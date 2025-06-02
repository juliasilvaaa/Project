import { useEffect, useState } from "react";
import { IDayViewNavigator } from "../../../interfaces/DayViewNavigator";
import './style.css'


export function DayViewNavigator({ inicialdate, onChange }: IDayViewNavigator) {
    const [currentDate, setCurrentDate] = useState(inicialdate || new Date())

    useEffect(() => {
        if (onChange) onChange(currentDate);
    }, [currentDate, onChange]);

    // Criando o formato da data
    const formateDate = (date: Date) =>
        date.toLocaleDateString("pt-BR", {
            weekday: 'long',
            day: "2-digit",
            month: "short",
            year: 'numeric'
        })


    function goToPreviousDay() {
        setCurrentDate((prev) => {
            const prevDate = new Date(prev);
            prevDate.setDate(prev.getDate() - 1);
            return prevDate;
        });
    }

    function goToNextDay() {
        setCurrentDate((prev) => {
            const nextDate = new Date(prev);
            nextDate.setDate(prev.getDate() + 1);
            return nextDate;
        });
    }


    return (
        <div className="container-days">

            <div className="container">
                <button onClick={goToPreviousDay} className="nav-button" aria-label="Dia anterior">
                    <img className="img-button" src="../../../src/img/left.png" alt="" />

                </button>

                <span className="date-label">{formateDate(currentDate)}</span>

                <button onClick={goToNextDay} className="nav-button" aria-label="Próximo dia">
                    <img className="img-button" src="../../../src/img/rigth.png" alt="" />
                </button>


            </div>


            <hr className="line" />

        </div>




    );
}