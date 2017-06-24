$(document).ready(() => {
  $('#btn-salvar').click(SaveProject)
})

function SaveProject(){
  //Criando um objeto vazio que representa um projeto
  var p = {
    project:{
      title: $('#title').val(),
      description: $('#description').val(),
      owner: $('#owner').val(),
      done: false,
      status: $('#status').val()
    }
  }

  //Poderia tambem inicializar o objeto vazio
  //e popular propriedade a propriedade
  //project.title = $('#title').val()

  $.ajax({
    url: 'http://aulasjavascript.herokuapp.com/projects',
    method: 'POST',
    data: p
  })
  .then(() => {
    window.location.href = "index.html"
  })


}
