import { LightningElement, api } from 'lwc';

export default class CreditRequestSublimitContainer extends LightningElement {
  @api currentStep;

  steps = [
    { id: "1", label: "Composição de Sublimite" },
    { id: "2", label: "Prazos" },
    { id: "3", label: "Grupo(s) de Garantia(s)" }
  ];

  get currentStepLabel() {
    var step = this.steps.filter((step) => this.currentStep == step.id);

    return step ? step[0].label : "default";
  }

  renderedCallback() {
    const style = document.createElement('style');
    style.innerText = `
      c-credit-request-sublimit-container .slds-modal__content .slds-card {
        border: solid 1px #CCC !important;
      }
      c-credit-request-sublimit-container .slds-card__header {
        margin: 0;
        padding-bottom: 10px;
        background-color: var(--slds-c-modal-footer-color-background, var(--sds-c-modal-footer-color-background, var(--slds-c-modal-color-background, var(--sds-c-modal-color-background, var(--lwc-colorBackground,rgb(243, 243, 243)))))) !important;
      }
      c-credit-request-sublimit-container .slds-progress {
        max-width: 100% !important;
      }
      c-credit-request-sublimit-container .slds-modal__content .slds-checkbox_on {
        display: none !important;
      }
      c-credit-request-sublimit-container .slds-modal__content .slds-checkbox_off {
        display: none !important;
      }
      c-credit-request-sublimit-container .slds-progress__item.slds-is-completed .slds-progress__marker--icon, .slds-progress__item.slds-is-completed .slds-progress__marker_icon {
        border-color: var(--slds-c-modal-footer-color-background, var(--sds-c-modal-footer-color-background, var(--slds-c-modal-color-background, var(--sds-c-modal-color-background, var(--lwc-colorBackground,rgb(243, 243, 243)))))) !important;
      }
      c-credit-request-sublimit-container .slds-progress__item.slds-is-active .slds-progress__marker {
        box-shadow: rgb(243 243 243) 0 0 0 4px !important;
        -webkit-box-shadow: rgb(243 243 243) 0 0 0 4px !important;
      }
      c-credit-request-sublimit-container .slds-progress__item.slds-is-active .slds-progress__marker, .slds-progress__item.slds-is-completed .slds-progress__marker {
        background: var(--slds-c-modal-footer-color-background, var(--sds-c-modal-footer-color-background, var(--slds-c-modal-color-background, var(--sds-c-modal-color-background, var(--lwc-colorBackground,rgb(243, 243, 243)))))) !important;
      }
      c-credit-request-sublimit-container .slds-scrollable--x, .slds-scrollable_x {
        overflow-x: hidden;
      }
      /*c-credit-request-sublimit-container .slds-progress__marker {
        border-color: var(--slds-c-modal-footer-color-background, var(--sds-c-modal-footer-color-background, var(--slds-c-modal-color-background, var(--sds-c-modal-color-background, var(--lwc-colorBackground,rgb(243, 243, 243)))))) !important;
      }*/
    `;
    this.template.querySelector('.slds-modal__content').appendChild(style);
  }
}