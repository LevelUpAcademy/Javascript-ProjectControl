$(document).ready(() => {
  $.ajax({
    url: 'http://aulasjavascript.herokuapp.com/projects',
    method: 'GET'
  })
  .then((data) => {
    RenderProjects(data)
  })
})

function RenderProjects(projects){
  var html = ''
  for (var i = 0; i < projects.length; i++) {
    html += '<div class="col-md-4">' +
            '   <div class="card">' +
            '       <div class="card-header">' + projects[i].title + '</div>' +
            '       <div class="card-block">' +
            '           <p>' + projects[i].description + '</p>' +
            '           <a class="btn" href="/delete.html?id=' + projects[i].id + '" >Deletar</a>' +
            '       </div>' +
            '   </div>' +
            '</div>'
  }

  $('#content').html(html)
}
