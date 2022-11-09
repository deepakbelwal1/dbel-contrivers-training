import { LightningElement } from 'lwc';

export default class MyCalculator extends LightningElement {
     
    handleAddition(){
        this.template.querySelector("c-addition").handleClick()
    }

    handleSubtraction(){
        this.template.querySelector("c-subtraction").handleClick1()
    }
    handleMultiplication(){
        this.template.querySelector("c-multiplication").handleClick2()
    }
    handleDivision(){
        this.template.querySelector("c-division").handleClick3()
    }
}