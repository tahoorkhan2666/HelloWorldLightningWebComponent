import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { registerListener } from  'c/pubsub';

export default class ChildSubscriber extends LightningElement {

    @wire(CurrentPageReference)pageRef;

    viewMessage = '';

    connectedCallback(){
        registerListener("parentPublisher" , this.showdetail , this )

        
    }

    showdetail(data){
       this.viewMessage = data;
    }
}