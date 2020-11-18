export default (number) => {
  const numbering = new Intl.NumberFormat("id-ID");
  return numbering.format(number);
};
