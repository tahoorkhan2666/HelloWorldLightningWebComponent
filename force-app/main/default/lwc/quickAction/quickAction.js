import { api, LightningElement } from 'lwc';
import { CloseActionScreenEvent } from 'lightning/actions';
import createAccount from '@salesforce/apex/QuickActionController.createAccount';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class QuickAction extends LightningElement {

    @api recordId;
    name = '';
    phone = '';
    isSpinner = false;

    connectedCallback(){
        this.name = '';
        this.phone = '';
    }

    handleChange = event =>{
        event.preventDefault();
        let name = event.target.name;
        let value = event.target.value;
        if(name === 'name'){
            this.name = value;
        }else{
            this.phone = value;
        }
    }

    closeAction(){
     this.dispatchEvent(new CloseActionScreenEvent());
    }

    handleSave = event => {
        this.isSpinner = true;
        event.preventDefault();

        createAccount({
            name : this.name,
            phone : this.phone,
            parentRecordId : this.recordId 
        }).then(result => {
            console.log('Result' , result)
             this.dispatchEvent(new ShowToastEvent({
                 title: 'Success',
                 message: 'Account Created',
                 variant: 'success'
             }));
            this.closeAction();
            
        }).catch(error => {
            console.error('Error' , error)
        }).finally(() => {
            this.isSpinner = false;
        })
    }


}