import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {

    handlePrev(){
        const prevEvent = new CustomEvent('previous');
        this.dispatchEvent(prevEvent);
    }


    handleNext(){
        const nextEvent = new CustomEvent('next');
        this.dispatchEvent(nextEvent);
    }

}