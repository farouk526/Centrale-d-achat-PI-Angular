import { Facture } from "./Facture"

export class  Commande{
    id : number
    clientcin: string
    client: string
    reponsableclient: string
    adresseclient: string
    devise: string
    dateCreation: Date
    totalttc:number
    archive:boolean
    facture:Facture
    
  }