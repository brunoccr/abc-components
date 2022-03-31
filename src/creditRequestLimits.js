import { LightningElement, api } from 'lwc';

export default class CreditRequestLimits extends LightningElement {
  @api limits;

  renderedCallback() {
    const style = document.createElement('style');
    style.innerText = `
      c-credit-request-limits .slds-form-element_horizontal:not(.slds-form-element_readonly), .slds-form_horizontal .slds-form-element:not(.slds-form-element_readonly), .slds-form_stacked .slds-form-element_horizontal:not(.slds-form-element_readonly) {
        margin-bottom: 0;
      }
    `;
    this.template.querySelector('lightning-accordion').appendChild(style);
  }
}