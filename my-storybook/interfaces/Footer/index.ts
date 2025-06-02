import { ISocialMedia } from "../SocialMedia"

export interface IFooter{
    backgroundColor: string
    information: string
    image: string
    /** Recebe um array de icons */
    icons: ISocialMedia[]
}