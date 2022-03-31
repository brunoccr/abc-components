import { LightningElement } from 'lwc';

import { initialValuesCustomerColumns } from './mockColumns';
import { 
  initialValuesCustomersPicklist, 
  initialValuesIndustryPicklist, 
  initialValuesCustomers 
} from './mockData';

export default class CreditRequestInitialValues extends LightningElement {
  customersPicklist = initialValuesCustomersPicklist;
  industryPicklist = initialValuesIndustryPicklist;
  
  customerColumns = initialValuesCustomerColumns;

  customers = initialValuesCustomers;
  
  renderedCallback() {
    const style = document.createElement('style');
    style.innerText = `
      c-credit-request-initial-values .slds-listbox__option-icon {
        display: none;
      }
      c-credit-request-initial-values .slds-form-element > .slds-form-element__help {
        display: none;
      }
    `;
    this.template.querySelector('lightning-card').appendChild(style);
  }
}