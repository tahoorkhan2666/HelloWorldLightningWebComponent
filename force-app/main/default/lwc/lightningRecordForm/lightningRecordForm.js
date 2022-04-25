import { api, LightningElement } from 'lwc';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Industry from '@salesforce/schema/Account.Industry';

export default class LightningRecordForm extends LightningElement {

    @api recordId;
    @api objectApiName;
    fields = [Account_Name,Account_Industry]

    handleSuccess(){
        alert("success complete");
    }

}