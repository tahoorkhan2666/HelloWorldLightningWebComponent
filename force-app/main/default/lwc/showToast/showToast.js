import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ShowToast extends LightningElement {

    showToast(){
        const event = new ShowToastEvent({
            title: 'Get Help',
            variant : 'success',
            message:
                'Salesforce documentation is available in the app. Click ? in the upper-right corner.',
        });
        this.dispatchEvent(event);

        const event1 = new ShowToastEvent({
            title: 'Get Help',
            variant : 'error',
            mode :'sticky',
            message:
                'Salesforce documentation is available in the app. Click ? in the upper-right corner.',
        });
        this.dispatchEvent(event1);


    }

}