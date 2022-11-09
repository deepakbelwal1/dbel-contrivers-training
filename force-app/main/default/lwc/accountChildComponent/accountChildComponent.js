import { LightningElement,track,api } from "lwc";
// imported Events
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/apex/AccountParentContainer.getAccount';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import Account_Id from '@salesforce/schema/Contact.AccountId';
import LASTNAME_FIELD from '@salesforce/schema/Contact.LastName';
//import PHONE_FIELD from '@salesforce/schema/Contact.Phone';

export default class AccountChildComponent extends LightningElement {
  isCreateContact=false;
  @track nameStr='';
  @track accounts=[]; 
  
  @api label="";
  LastName=LASTNAME_FIELD;
  objectapi=CONTACT_OBJECT;
  accountId=Account_Id;
  accountId1;
  handleaccount(event){
    this.nameStr=event.detail.value;
  }
  getAccount(){
    ACCOUNT_OBJECT({name1st:this.nameStr}).then(results=>{
        this.accounts=results;
  })
  }
  handleAccountSelection(event){
    this.accountId1 = event.detail.value;
    console.log(this.accountId1)
}

createContact(){

    this.isCreateContact=true;
    
}

    handleSuccess(event){
        // event.detail.Name
            // Creates the event with the contact ID data.
            const selectedEvent = new CustomEvent('contactcreated', { detail: event.detail.Name });
            // Dispatches the event.
            this.dispatchEvent(selectedEvent);
            const evt = new ShowToastEvent({
                title: 'CreateSuccesfully',
                message: 'CreateSuccesfully',
                variant:'success',
            });
            this.dispatchEvent(evt);
      }
}
