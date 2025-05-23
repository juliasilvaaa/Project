import { ISectionCategorie } from "../../../interfaces/SectionCategories";
import './style.css'


export function SectionCategories({ slug, title, backgroundColor }: ISectionCategorie) {
    return (
        <button id="section" style={{backgroundColor}}>
            <h1 id="title-categorie">
                {title}
            </h1>
        </button>

    )
}