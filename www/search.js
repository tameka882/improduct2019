$(document).ready(function(){
 $.ajaxSetup({ cache: false });
 $('#search').keyup(function(){
  $('#result').html('');
  $('#state').val('');
  var searchField = $('#search').val();
  var expression = new RegExp(searchField, "i");
  $.getJSON('data.json', function(data) {
   $.each(data, function(key, value){
    if(($('#search').is(':focus'))&&(value.name.search(expression) != -1 || value.description.search(expression) != -1|| value.prix.search(expression) != -1)
  )  {
     $('#result').append('<a href="'+value.link+'"><img src="'+value.image+'" height="50" width="50" class="img-thumbnail" /> '+value.name+' | <span class="text-muted">'+value.description+'</span> '+value.prix+'</a> </br>');
    }
   });
  });
 });

 $('#result').on('click', 'a', function() {
  var click_text = $(this).text().split('|');
  $('#search').val($.trim(click_text[0]));
  $("#result").html('');

 });

});
