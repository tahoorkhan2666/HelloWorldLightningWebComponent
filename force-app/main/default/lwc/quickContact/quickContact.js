import { api, LightningElement } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';

export default class QuickContact extends LightningElement {

    

    @api

    invoke(){
        window.console.log('inside method')
    }

    closeAction(){
        this.dispatchEvent(new CloseActionScreenEvent());
       }
}