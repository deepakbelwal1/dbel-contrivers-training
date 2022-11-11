import { LightningElement, api } from 'lwc';

export default class Addition extends LightningElement {
  Comment=0;
    number1;
    number2;
    result;
    

    change1(event) {
        this.number1 = event.detail.value;
        console.log("this.number1" + this.number1)
      }
      
    change2(event) {
        this.number2 = event.detail.value;
        console.log("this.number2" + this.number2)
      }
@api handleClick() {
		console.log("BUtton CLicked")
         this.result=Number(this.number1)+Number(this.number2);
      }


        
 
}