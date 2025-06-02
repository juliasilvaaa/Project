import { IButtonSeeInstall } from "../ButtonSeeInstall"

export interface IApp{
    /** Categoria para o app  */
    categorie: string
    title: string
    image: string
    description: string
    button: IButtonSeeInstall
}