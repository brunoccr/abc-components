const defaultActionButtons = [
  { 
    type: "button-icon", 
    fixedWidth: 50,
    typeAttributes: {  
      name: 'edit',  
      title: 'Edit',  
      disabled: false,  
      value: 'edit',  
      iconName: 'utility:edit',
      iconPosition: 'center'  
    }
  },
  { 
    type: "button-icon", 
    fixedWidth: 50,
    typeAttributes: {  
      name: 'remove',  
      title: 'Remove',  
      disabled: false,  
      value: 'remove',  
      iconName: 'utility:recycle_bin_full',
      iconPosition: 'center'  
    }
  }
];

export const initialValuesCustomerColumns = [
  { label: 'Empresa', fieldName: 'customerName', hideDefaultActions: true, sortable: false, cellAttributes: { alignment: 'left' } },
  { label: 'Limite Total', fieldName: 'totalLimit', type: 'currency', hideDefaultActions: true, sortable: false, cellAttributes: { alignment: 'left' } },
  { label: 'Clean Total', fieldName: 'totalClean', type: 'currency', hideDefaultActions: true, sortable: false, cellAttributes: { alignment: 'left' } },
  ...defaultActionButtons
];

export const customerListColumns = [
  { label: "Empresa", fieldName: 'customerName', hideDefaultActions: true, sortable: false },
  { label: "CNPJ", fieldName: 'cnpj', hideDefaultActions: true, sortable: false },
  { label: "Limite Total Solicitado", fieldName: 'totalLimit', type: 'currency', hideDefaultActions: true, sortable: false, cellAttributes: { alignment: 'left' } },
  { label: "Clean Total", fieldName: 'totalClean', type: 'currency', hideDefaultActions: true, sortable: false, cellAttributes: { alignment: 'left' } },
];

export const customerSublimitListColumns = [
  { label: "Empresa", fieldName: 'customerName', hideDefaultActions: true, sortable: false },
  { label: "CNPJ", fieldName: 'cnpj', hideDefaultActions: true, sortable: false },
  ...defaultActionButtons
];

export const productSublimitListColumns = [
  { label: "Família", fieldName: "family", hideDefaultActions: true, sortable: false },
  { label: "Grupo", fieldName: "group", hideDefaultActions: true, sortable: false },
  { label: "Modalidade", fieldName: "modality", hideDefaultActions: true, sortable: false },
  ...defaultActionButtons
];

