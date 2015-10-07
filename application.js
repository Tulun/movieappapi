$(function() {
  var form = $('form'), container = $('#container');
  container.hide();
  form.on('submit', function(e){
      var url, movie, data;
      e.preventDefault();
  movie = form.find('input').val();
      url = 'http://www.omdbapi.com/?t=' + movie + '&tomatoes=true'
      $.ajax(url, {
          complete: function(xhr, status){
              data = $.parseJSON(xhr.responseText);
              console.log(data);
              container.find('.title').text(data.Title);
              container.find('.plot').text(data.Plot);
              container.find('.poster').html('<img src="' + data.Poster + '"/>');
              container.find('.year').text(data.Year);
              container.find('.imdb-rating').text(data.imdbRating);
              container.find('.imdb-votes').text(data.imdbVotes);
              container.find('.tomato-rating').text(data.tomatoRating);
              container.find('.tomato-votes').text(data.tomatoReviews);
              container.find('.tomato-image').html('<img src="http://d3biamo577v4eu.cloudfront.net/static/images/logos/rtlogo.png"/>');
              container.show();
          }
      });    
  });
});