import { LightningElement } from 'lwc';

import { customerSublimitListColumns, productSublimitListColumns } from './mockColumns';
import { customersSublimit, productsSublimit, initialValuesCustomersPicklist } from './mockData';

export default class CreditRequestSublimitComposition extends LightningElement {
  customerListColumns = customerSublimitListColumns;
  productListColumns = productSublimitListColumns;
  customers = customersSublimit;
  products = productsSublimit;

  customersPicklist = initialValuesCustomersPicklist;

  renderedCallback() {
    const style = document.createElement('style');
    style.innerText = `
      c-credit-request-sublimit-composition .slds-listbox__option-icon {
        display: none;
      }
    `;
    this.template.querySelector('lightning-card').appendChild(style);
  }
}