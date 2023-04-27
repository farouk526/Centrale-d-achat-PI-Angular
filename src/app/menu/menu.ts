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
        url:  "offreproduit"
      },
      {
        id: 'OffreService',
        title: 'OffreService',
        type: 'item',
        icon: 'archive',
        url: "offreservice"
      }
    ]
  },
  {
    id: "commande",
    title: "Commandes",
    type: "collapsible",
    icon: "inbox",
    badge: {
      title: '1',
      classes: 'badge-light-warning badge-pill'
    },
    children: [
      {
        id: 'commande',
        title: 'Commandes',
        type: 'item',
        icon: 'layers',
        url: "commande"
      },
      {
        id: 'itemcommande',
        title: 'itemcommande',
        type: 'item',
        icon: 'layers',
        url: "itemcommande"
      } ]
    },
  {
    id: "facture",
    title: "Factures",
    type: "collapsible",
    icon: "inbox",
    badge: {
      title: '1',
      classes: 'badge-light-warning badge-pill'
    },
    children: [
      {
        id: 'facture',
        title: 'Factures',
        type: 'item',
        icon: 'layers',
        url: "facture"
      },
      {
        id: 'itemfacture',
        title: 'itemfacture',
        type: 'item',
        icon: 'layers',
        url: "itemfacture"
      } ]
    },
    {
      id: "appeloffre",
      title: "AppelsOffres",
      type: "item",
      icon: "inbox",
      url: "appeloffre",
    },
    {
      id: "demandeachat",
      title: "Demandes Achat",
      type: "item",
      icon: "inbox",
      url: "demandeachat",
    },
  {
    id: "naturearticle",
    title: "Nature Articles",
    type: "item",
    icon: "inbox",
    url: "naturearticle",
  },
  {
    id: "paiement",
    title: "Paiement",
    type: "item",
    icon: "inbox",
    url: "paiement",
  },
  {
    id: "codepromo",
    title: "Codepromo",
    type: "item",
    icon: "inbox",
    url: "codepromo",
  }

];