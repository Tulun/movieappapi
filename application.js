$(function() {

  var formSingle = $('#single-search');
  var formMulti = $('#multi-search');
  formSingle.on('submit', function(e){
    var url, movie, data;
    e.preventDefault();
  movie = formSingle.find('input').val();
      url = 'http://www.omdbapi.com/?t=' + movie + '&type=movie&tomatoes=true'
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
  formMulti.on('submit', function(e){
    var url, movie, data;
    e.preventDefault();
    movie = formMulti.find('input').val();
    url = 'http://www.omdbapi.com/?s=' + movie + '&type=movie&tomatoes=true'
    $.getJSON(url, function(data) {
      console.log(data);
      $.each(data['Search'], function(index, value) {
        console.log(value);
        console.log(index);
        var templateScript = $("#movie-template").html();
        var template = Handlebars.compile(templateScript);
        var compiledHtml = template(value);
        $('#place-content').append(compiledHtml);  
      });
    });
  });    
});