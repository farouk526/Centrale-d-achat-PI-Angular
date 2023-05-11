import {User} from "../auth/models";
import {ItemCommande} from "./ItemCommande";

export class Reclamation {
    id: number
    description: string
    email: string

    reclamationType: string


    date:Date ;
    user?:User = new User();

    itemCommande?:ItemCommande = new ItemCommande();

  }