import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class PageReference extends NavigationMixin(LightningElement) {

    @track heading='PageReference Demo';

    navigateToHomePage(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                actionName : 'home',
                objectApiName : 'Case'
            }
        });
    }

    navigateToRecordPage(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes :{
                objectApiName : 'Account',
                actionName : 'list',
                recordId :'0015g00000RzDwpAAF'
            }
        });
    }

    navigateToWebPage(){
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes : {
                url : 'http://salesforce.com'
            }
        });
    }

    navigateToTabPage(){
        this[NavigationMixin.Navigate]({
            type : 'standard__navItemPage',
            attributes : {
                apiName : 'Home'
            }
        });
    }

    navigateToRelatedListPage(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordRelationshipPage',
            attributes : {
                recordId : '0015g00000RzDwpAAF',
                objectApiName  : 'Account',
                relationsipApiName : 'Contact',
                actionName : 'view' 
            }
        });
    }

    navigateToEditPage(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes : {
                objectApiName : 'Account',
                actionName : 'edit',
                recordId : '0015g00000RzDwpAAF'
            }
        });
    }

    navigateToNewRecordPage(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Account',
                actionName : 'new'
            }
        });
    }

    navigateToListPage(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes : {
                objectApiName : 'Account',
                actionName :'list'
            }
        });
    }



  
}