export const fields = [
  {
    field: "num",
    label: "Numéro",
    required: true,
    maxLength: 10,
    minLength: 1,
    type: String
  },
  {
    field: "type",
    label: "Type",
    maxLength: 10,
    type: String
  },
  {
    field: "vue",
    label: "Vue",
    maxLength: 50,
    type: String
  },
  {
    field: "etat",
    label: "Etat",
    type: Number
  },
  {
    field: "nombreLit",
    label: "Nombre de lits",
    type: Number
  },
  {
    field: "price",
    label: "Prix",
    type: Number
  }
];
