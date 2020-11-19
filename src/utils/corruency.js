export default function formatPrice(valor) {
  const res = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);

  return res;
}
