import { api, LightningElement, track, wire } from 'lwc';
import { getRecord , getFieldValue ,createRecord } from 'lightning/uiRecordApi';
import First_Name  from  '@salesforce/schema/Contact.FirstName';

const Fields = ['Contact.Name','Contact.Phone','Contact.Email'];
export default class LightningUiRecordApi extends LightningElement {

    @api recordId;

    @track contact;
    @track name;
    @track phone;
    @track email;
    @track accountName;

    get nameValue(){
        return getFieldValue(this.contact , First_Name);
    }

    @wire(getRecord , {recordId : '$recordId' , fields : Fields , modes : ['view'] , layoutTypes : ['Full']})
    wiredRecord({data,error}){
        if(data){
            this.contact = data ;
            console.log('Contact Info : ' , this.contact)
            this.name = this.contact.fields.FirstName.value;
            this.accountName = this.contact.fields.Account.value.fields.Name.value;
            console.log('Account Name',this.accountName)
        }

        if(error){
            
        }
    }

}