import { LightningElement } from 'lwc';
import firstTemplate from './dynamicComponent.html';
import templateOne from './templateOne.html'

export default class DynamicComponent extends LightningElement {

    templateOne = false;

    render(){
         return this.templateOne === false ? firstTemplate:templateOne ;

    }

    handleClick(){
       this.templateOne = this.templateOne === true ? false : true;
    }
}