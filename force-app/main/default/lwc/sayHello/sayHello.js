import { LightningElement } from 'lwc';
export default class SayHello extends LightningElement {
    myTitle="say Hello";
    handleClick(){
        window.alert("sayHello");
    }
}