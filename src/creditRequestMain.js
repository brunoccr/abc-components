import { LightningElement } from 'lwc';

import { customerListColumns } from './mockColumns';
import { mainCustomers } from './mockData';

export default class CreditRequestMain extends LightningElement {
  haveGuarantorGroup = true;

  customers = mainCustomers.customers;
  limits = mainCustomers.limits;
  customerColumns = customerListColumns;

  get haveSublimits() {
    return this.limits.length > 0;
  }

  renderedCallback() {
    const style = document.createElement('style');
    style.innerText = `
      c-credit-request-main .slds-accordion__summary-action {
        padding-left: 0;
        font-size: .75rem;
      }
    `;
    this.template.querySelector('lightning-card').appendChild(style);
  }
}