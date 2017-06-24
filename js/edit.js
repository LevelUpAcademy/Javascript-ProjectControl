$(document).ready(() => {
  GetProjectDetails()
  SetEvents()
})

function GetProjectDetails(){
  var idProject = window.location.search.split('=')[1]
  $.ajax('http://aulasjavascript.herokuapp.com/projects/' + idProject)
  .then((project) => {
    $('#title').val(project.title)
    $('#owner').val(project.owner)
    $('#status').val(project.status)
    $('#description').val(project.description)
  })
}

function SetEvents(){
  $('#btn-salvar').click(SaveProject)
}

function SaveProject(){
  var p = {
    project:{
      title: $('#title').val(),
      description: $('#description').val(),
      owner: $('#owner').val(),
      done: false,
      status: $('#status').val()
    }
  }

  $.ajax({
    url: 'http://aulasjavascript.herokuapp.com/projects/' +
    window.location.search.split('=')[1],
    method: 'PUT',
    data: p
  })
  .then(() => {
    window.location.href = "index.html"
  })
}
