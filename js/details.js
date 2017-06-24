$(document).ready(() => {
  GetProjectDetails()
})

function GetProjectDetails(){
  var idProject = window.location.search.split('=')[1]
  $.ajax('http://aulasjavascript.herokuapp.com/projects/' + idProject)
  .then((project) => {
    $('#title').text(project.title)
    $('#owner').text(project.owner)
    $('#status').text(project.status)
    $('#description').text(project.description)
    $('#btn-edit').prop('href','edit.html?id=' + project.id)
  })
}
