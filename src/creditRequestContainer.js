import { LightningElement, api } from "lwc";

export default class CreditRequestContainer extends LightningElement {
  @api currentStep = "1";
  
  renderedCallback() {
      const style = document.createElement('style');
      style.innerText = `
        c-credit-request-container .slds-card {
          border: solid 1px #CCC !important;
        }
        c-credit-request-container .slds-card__header {
          padding-bottom: 10px;
          background-color: var(--slds-c-modal-footer-color-background, var(--sds-c-modal-footer-color-background, var(--slds-c-modal-color-background, var(--sds-c-modal-color-background, var(--lwc-colorBackground,rgb(243, 243, 243)))))) !important;
        }
      `;
      this.template.querySelector('lightning-card').appendChild(style);
  }
}
