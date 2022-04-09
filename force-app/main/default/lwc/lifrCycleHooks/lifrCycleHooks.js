import { LightningElement } from 'lwc';

export default class LifrCycleHooks extends LightningElement {

    constructor(){
        super();
        alert('I am in Constructor');
    }

    connectedCallback(){
        alert('I am in connected call back');
    }

    renderedCallback(){
        alert('I am in rendered call back');
    }

    disconnectedCallback(){
        alert('I am in disconnected Call back');
    }

    errorCallback(error,stack){
        alert('I am in error call back.');
    }
}