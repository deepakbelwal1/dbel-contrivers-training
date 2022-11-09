import { LightningElement } from "lwc";

export default class accountParentComponent extends LightningElement {
contactLastName;
  showFeatures = true;


  contactCreatedParent(event){
    this.contactLastName= event.detail
    //event.detail
  }
}

