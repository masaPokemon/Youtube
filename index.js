var url = '';
var data = {};
$('#send').click(function(){
  url = $('#url').val();
  data = {
    url: url
  };
  $.ajax({
    url: 'http://localhost/test/',
    type: 'GET',
    data: data,
    success: function(data) {
      console.log(data);
    }
  });
});
