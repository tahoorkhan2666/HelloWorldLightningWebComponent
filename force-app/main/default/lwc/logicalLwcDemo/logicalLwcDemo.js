import {  LightningElement, track, wire } from 'lwc';
import methodtest from '@salesforce/apex/utilityClass.methodtest';
import mapdemo from '@salesforce/apex/utilityClass.mapdemo';

export default class LogicalLwcDemo extends LightningElement {

    @track greeting = 'Tahoor Khan';
    @track message = 'I am LWC DEMO welcoming you!' ;
    @track records;
    @track error;
    @track contacts = [{
                        Id : '4646165164686',
                        Name : 'Tahoor Khan'

                       },
                       {
                        Id : '4646165164687',
                        Name : 'Tahoor2 Khan2'

                       },
                       {
                        Id : '4646165164688',
                        Name : 'Tahoor1 Khan1'

                       }
];


     @wire(methodtest) 
     wireData({error,data}){
         if(data){
             this.records = data
             console.log('Data' + this.records);
         }
         if(error){
             this.error = error;
             console.log('Error' + this.error);
         }
     }

     handleClick(){
          mapdemo().then(result => {
              console.log(result);
          })
          .catch(error =>  {
              this.error = error;
          })
     }
}