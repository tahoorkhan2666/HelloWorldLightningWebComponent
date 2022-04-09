import { api, LightningElement } from 'lwc';

import testLabel from '@salesforce/label/c.testLabel';
import testResource1 from '@salesforce/resourceUrl/testResource1';
import userId from '@salesforce/user/Id';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import Name_Field from '@salesforce/schema/Account.Name';

import lang from '@salesforce/i18n/lang';
import locale from '@salesforce/i18n/locale';
import currency from '@salesforce/i18n/currency';
import timeZone from '@salesforce/i18n/timeZone';

export default class DesignLWCDemo extends LightningElement {

    @api greeting;
    @api heading;
    @api message;

    @api label = {
        testLabel,
        testResource1,
        userId,
        ACCOUNT_OBJECT,
        Name_Field,
        lang,
        locale,
        currency,
        timeZone



        
    }
}