import { LightningElement, wire } from 'lwc';
import queryAccountsByEmployeeNumber from '@salesforce/apex/AccountListControllerLwc.queryAccountsByEmployeeNumber';
import queryAccountsByRevenue from '@salesforce/apex/AccountListControllerLwc.queryAccountsByRevenue';
export default class AccountFinder extends LightningElement
{
    annualRevenue = null; 
    @wire(queryAccountsByRevenue, { annualRevenue: '$annualRevenue' })
    accounts;
    handleChange(event) {
        this.annualRevenue = event.detail.value;
    }
    reset() {
        this.annualRevenue = null;
    }
    @wire(queryAccountsByEmployeeNumber, { numberOfEmployees: '$numberOfEmployees' })
    accounts;  
}