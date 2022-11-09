import { LightningElement } from 'lwc';
import getRandomBreed from '@salesforce/apex/randomDog.getRandomBreed';

export default class RandomDog extends LightningElement {
    pictureUrl;
    handleClick() {
        getRandomBreed().then((response)=>{
            this.pictureUrl=response
        })
        

 }
}