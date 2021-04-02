function adicionarFilme(){
  var campoFilme = document.querySelector('#filme')
  var filme = campoFilme.value
  if(filme.endsWith('.jpg')){
    listarFilmesNaTela(filme)
  } else {
    alert('Imagem inválida')
  }
  campoFilme.value = ''
}

function listarFilmesNaTela(filme){
  var listaFilmes = document.querySelector('#listaFilmes')
  var elementoFilme = "<img src=" + filme + ">"
  listaFilmes.innerHTML = listaFilmes.innerHTML + elementoFilme
}