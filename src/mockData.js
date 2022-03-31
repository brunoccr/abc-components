export const initialValuesCustomersPicklist = [
  { label: "Empresa 1 - 00.000.000/0000-01", value: 10000 },
  { label: "Empresa 2 - 00.000.000/0000-02", value: 10001 }
];

export const initialValuesIndustryPicklist = [
  { label: "Empreiteira", value: 1 },
  { label: "Comércio", value: 2 }
];

export const initialValuesCustomers = [
  { id: 1, customerName: "Empresa 1", totalLimit: 0, totalClean: 0 },
  { id: 2, customerName: "Empresa 2", totalLimit: 0, totalClean: 0 },
];

export const documents = [
  { id: 1, label: "Balanço", value: false },
  { id: 2, label: "Apresentação Institucional", value: true },
  { id: 3, label: "Carta Bacen PJ", value: true },
  { id: 4, label: "Balancete", value: true },
  { id: 5, label: "Organograma/Estrutura Societária", value: true },
  { id: 6, label: "Questionário Sócio Ambiental ", value: true },
  { id: 7, label: "Faturamentos", value: true },
  { id: 8, label: "Contrato Social + Última Alteração", value: true },
  { id: 9, label: "Suitability", value: true },
  { id: 10, label: "Endividamento Detalhado", value: true },
  { id: 11, label: "Resumo Patrimonial", value: true },
  { id: 12, label: "Carta CED", value: true },
  { id: 13, label: "Imposto de Renda dos Sócios", value: true },
  { id: 14, label: "Carta Bacen PF", value: true },
  { id: 15, label: "Relatório de Visita", value: true },
];

export const mainCustomers = {
  customers: [
    { 
      id: 1, 
      customerName: "Empresa 1", 
      cnpj: "00.000.000/0000-01", 
      totalLimit: 0, 
      totalClean: 0
    },
    { 
      id: 2, 
      customerName: "Empresa 2", 
      cnpj: "00.000.000/0000-02", 
      totalLimit: 0, 
      totalClean: 0
    }
  ],
  limits: [
    { 
      id: 1, 
      name: "Sublimite #1 - R$ 1.000.000,00",
      exclusive: true,
      expirationGroup: true,
      attributes: [
        { id: 1, label: "Produtos", value: "Cheque-empresa (Cheque Especial)" },
        { id: 2, label: "Prazo", value: "120 dias" },
        { id: 3, label: "Carência do Principal", value: "20 dias" },
        { id: 4, label: "Carência de Encargos", value: "20 dias" },
        { id: 5, label: "Amortização do Principal", value: "Semestral - 6 PMTS" },
        { id: 6, label: "Pagamento de Encargos", value: "Semestral - 6 PMTS" },
        { id: 7, label: "Garantia", value: "(1) Duplicatas (50% P+E) + Aval Garantidor (100% P+E)" }
      ] 
    }, 
    { 
      id: 2, 
      name: "Sublimite #2 - R$ 2.000.000,00",
      exclusive: false,
      expirationGroup: true,
      attributes: [
        { id: 1, label: "Empresas", value: "Aurora Drops (30.388.745/0001-30) OU Alice Chapéus (30.388.745/0001-30)" },
        { id: 2, label: "Produtos", value: "Cheque-empresa (Cheque Especial); Trade Finance Exportação (Trava de Exportação)" },
        { id: 3, label: "Prazo", value: "120 dias" },
        { id: 4, label: "Carência do Principal", value: "20 dias" },
        { id: 5, label: "Carência de Encargos", value: "20 dias" },
        { id: 6, label: "Amortização do Principal", value: "Semestral - 6 PMTS" },
        { id: 7, label: "Pagamento de Encargos", value: "Semestral - 6 PMTS" },
        { id: 8, label: "Garantia", value: "(1) Duplicatas (50% P+E) + Aval Garantidor (100% P+E)" }
      ] 
    }
  ]
};

export const customersSublimit = [
  { 
    id: 1, 
    customerName: "Aurora Drops", 
    cnpj: "30.388.745/0001-30"
  }
];

export const productsSublimit = [
  {
    id: 1,
    family: "Trade Finance",
    group: "Exportação",
    modality: "Pagamento de Exportação"
  }
];