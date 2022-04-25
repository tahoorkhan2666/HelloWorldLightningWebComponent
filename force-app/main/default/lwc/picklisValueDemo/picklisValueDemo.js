import { LightningElement, track, wire } from 'lwc';
import { getPicklistValues , getPicklistValuesByRecordType , getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_SOURCE from '@salesforce/schema/Account.AccountSource'
import ACCOUNT_OBJECT from '@salesforce/schema/Account';

export default class PicklisValueDemo extends LightningElement {

    @track picklistvalues;
    @track error;
    @track values ;
    @track picklistvaluesByRecordType;
    @ track accountsourcebyRecordType;

    @wire(getObjectInfo ,{objectApiName : ACCOUNT_OBJECT})
    wiredobject({data,error}){
        if(data){
            console.log(data);
            console.table(data);
        }
        if(error){
            console.log(error)
        }
    }

    @wire(getPicklistValuesByRecordType,{objectApiName : ACCOUNT_OBJECT, recordTypeId : '0125g000000meuyAAA'})
    wiredpicklistvaluesbyrecordtype({data,error}){
        if(data){
            console.log('Picklist values : ' , data.picklistFieldValues.Industry.values);
            this.picklistvaluesByRecordType = data.picklistFieldValues.Industry.values;
            this.accountsourcebyRecordType = data.picklistFieldValues.AccountSource.values;

        }
        if(error){
            console.log(error);
        }
    }

    @wire(getPicklistValues,{recordTypeId: '012000000000000AAA', fieldApiName: ACCOUNT_SOURCE})
    wiredpicklistvalues({data,error}){
        if(data){
            console.log('Picklist values are :' , data.values);
            this.picklistvalues = data.values;
            this.error = undefined;
        }

        if(error){
            console.log(`Error occured while fetching picklist values ${error}`);
            this.error = error;
            this.picklistvalues = undefined;
        }
    }

    handleChange(){

    }
}