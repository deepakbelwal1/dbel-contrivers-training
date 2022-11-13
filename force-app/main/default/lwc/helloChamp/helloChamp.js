import { LightningElement } from 'lwc';

export default class HelloChamp extends LightningElement {
 String;
    handleClick(event){
        console.log("Button Clicked")
        
        this.String="HelloChamp";
        


    }
}