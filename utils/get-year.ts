function getYear(date: Date) {
  return new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
  }).format(date);
}

export default getYear;