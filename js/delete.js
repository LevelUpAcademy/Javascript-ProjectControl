$(document).ready(() => {
  $('#btn-delete').click(DeleteProject)
})

function DeleteProject(){
  $.ajax({
    url:'http://aulasjavascript.herokuapp.com/projects/' +
    window.location.search.split('=')[1],
    method: 'DELETE'
  })
  .then(() => {
    window.location.href = 'index.html'
  })
}
