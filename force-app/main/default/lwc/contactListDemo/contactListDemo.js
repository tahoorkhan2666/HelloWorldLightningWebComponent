import { LightningElement ,track,wire} from 'lwc';
import getContactList from '@salesforce/apex/contactListService.getContactList';
import getAccountList from '@salesforce/apex/contactListService.getAccountList';


export default class ContactListDemo extends LightningElement {
    @track searchKey;
    @track contacts;
    @track error;

    @track searchKeyAccount;
    @track accounts;
    @track erroraccount;

    @track selectAccount;

    

    @wire(getContactList,{ name : '$searchKey'})
    wiredcontacts({data,error}){
        if(data){
            this.contacts = data;
        }
        if(error){
            this.error = error;
        }
    }

    handleChange(event){
        event.preventDefault();
        this.searchKey = event.target.value;
    }

    handleChangeAccount(event){
        event.preventDefault();
        this.searchKeyAccount = event.target.value;
    }

    findAccount(){
        getAccountList({
            name : this.searchKeyAccount
        }).then(result =>{
            this.accounts = result;

        }).catch(error => {
              this.erroraccount = error;
        })
    }
    handleSelectRec(event){

        const recordId = event.detail;
        console.log('recordId = ',recordId);

        this.selectAccount = this.accounts.find(account => account.Id === recordId);

    }





}