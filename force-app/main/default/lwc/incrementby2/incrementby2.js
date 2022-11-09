import { LightningElement, track } from 'lwc';

export default class Incrementby2 extends LightningElement {

    @track count= 0;
    get displayInitialValue(){
        return this.count==0;
    }
    handleClick(event) {
		console.log("Button Clicked")
        this.count= this.count+2;
        
    }
    
}