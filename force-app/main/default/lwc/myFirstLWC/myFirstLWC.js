import { api, LightningElement, track } from 'lwc';
import ID from '@salesforce/user/Id';

export default class MyFirstLWC extends LightningElement {

    @api name = 'Tahoor Khan' ;
    @track title = 'SFDC Developer';
    phone = '123456789';
    email = 'tahoor@2666.com'
    userId = ID;

    handleClick(){
        this.name = 'THK';
        this.title = 'SFDC';
        console.log('i am in js file.');
    }
}