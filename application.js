$(function() {

  var form = $('form'), container = $('#container');
  form.on('submit', function(e){
    var url, movie, data;
    e.preventDefault();
  movie = form.find('input').val();
      url = 'http://www.omdbapi.com/?t=' + movie + '&tomatoes=true'
      $.ajax(url, {
          complete: function(xhr, status){
              data = $.parseJSON(xhr.responseText);
              console.log(data);
              var templateScript = $("#movie-template").html();
              var template = Handlebars.compile(templateScript);
              var compiledHtml = template(data);
              $('#place-content').html(compiledHtml);  
          }
      });     
  });

});