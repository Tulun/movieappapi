$(function() {
  var form = $('form'), container = $('#container');
  container.hide();
  form.on('submit', function(e){
      var url, movie, data;
      e.preventDefault();
  movie = form.find('input').val();
      url = 'http://www.omdbapi.com/?t=' + movie + '&type=movie&tomatoes=true'
      $.ajax(url, {
          complete: function(xhr, status){
              data = $.parseJSON(xhr.responseText);
              console.log(data);
              container.find('.title').text(data.Title);
              container.find('.plot').text(data.Plot);
              container.find('.poster').html('<img src="' + data.Poster + '"/>');
              container.find('.year').text(data.Year);
              container.show();
          }
      });    
  });
});