const btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', OrdenarLivrosPorPreco);

function OrdenarLivrosPorPreco() {
  let livrosOrdenados = livros.toSorted((a, b) => a.preco - b.preco)
  exibirOsLivrosNaTela(livrosOrdenados)
}