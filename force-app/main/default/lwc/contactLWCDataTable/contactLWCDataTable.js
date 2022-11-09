import { LightningElement, wire } from 'lwc';
import NAME_FIELD from "@salesforce/schema/Contact.Name"
import EMAIL_FIELD from "@salesforce/schema/Contact.Email"
import getContacts from "@salesforce/apex/ContactController.getContacts"
const COLUMNS = [
	{ label: "Contact Name", fieldName: NAME_FIELD.fieldApiName, type: "text" }, {label: "Email", fieldName: EMAIL_FIELD.fieldApiName, type: "text"},
]

export default class GetContacts extends LightningElement {
    columns = COLUMNS
    contacts;
    isDisabled=false;
    greeting;
	connectedCallback() {}
	renderedCallback() {
		console.log(this.contacts)
	}
    changeHandler(event) {
        this.greeting = event.target.value;
        console.log("this.greeting" + this.greeting)
      }

    handleClick(event) {
		console.log("BUtton CLicked")
        getContacts({
         i:this.greeting
    })
    

        .then((data) => {
            console.log("Server returned response")
            console.log(data)
            this.contacts = data
            // code to execute if create operation is successful
        })
         .catch((error) => {
            // code to execute if create operation is not successful
        })
    }
}
