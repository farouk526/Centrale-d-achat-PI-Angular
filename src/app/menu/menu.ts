import { CoreMenu } from "@core/types";
let sed:string ="produit/";
export const menu: CoreMenu[] = [
  {
    id: "home",
    title: "Home",
    translate: "MENU.HOME",
    type: "item",
    icon: "home",
    url: "home",
  },
  {
    id: "appeloffre",
    title: "AppelsOffres",
    type: "item",
    icon: "inbox",
    url: "appeloffre",
  },
  {
    id: "commande",
    title: "Commandes",
    type: "item",
    icon: "inbox",
    url: "commande",
  },
  {
    id: 'Offres',
    title: 'Offres',
    type: 'collapsible',
    icon: 'shopping-cart',
    badge: {
      title: '2',
      classes: 'badge-light-warning badge-pill'
    },
    children: [
      {
        id: 'OffreProduit',
        title: 'OffreProduit',
        type: 'item',
        icon: 'layers',
        url: sed+'OffreProduit'
      },
      {
        id: 'OffreService',
        title: 'OffreService',
        type: 'item',
        icon: 'archive',
        url: sed+"OffreService"
      }
    ]
  },
  {
    id: "facture",
    title: "Factures",
    type: "item",
    icon: "inbox",
    url: "facture",
  },
  {
    id: "stock",
    title: "Stock",
    type: "item",
    icon: "inbox",
    url: "stock",
  },

  {
    id: "fournisseur",
    title: "Fournisseurs",
    type: "item",
    icon: "inbox",
    url: "fournisseur",
  }

];