import { LightningElement , wire } from 'lwc';
import Name_field from '@salesforce/schema/Account.name';
import sObject from '@salesforce/schema/Account';
import getConList from '@salesforce/apex/Accountclass.conlst';

export default class HelloWorld extends LightningElement {

name = Name_field;
obj = sObject;

@wire(getConList)contct;

greeting = 'Hello World';
Contacts = [
    {  Name : 'Tahoor',
       Title : 'SFDC dev',
       Id : '005464645651'
    },
    {  Name : 'Fahoor',
    Title : 'SFDC dev',
    Id : '005464645652'
 },
 {  Name : 'Lahoor',
 Title : 'SFDC dev',
 Id : '005464645653'
}
];

handleChange(event){
    this.greeting = event.target.value;
}

}