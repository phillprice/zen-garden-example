$( document ).ready(function() {
	var links="";
	function getArray(){
    $.getJSON('Assets/links.json', function (json) {
      for (var key in json) {
        if (json.hasOwnProperty(key)) {
        	var item = json[key];
          links+="<li><a href=\"http://"+item.url+"\" title=\""+item.title+"\">"+item.title+"</a> <span>"+item.author+"</span></li>";
        }
      }
      $('#links ul').html(links);
    });
	}
	getArray();

  $('#maincontent div:not(:first-child) p').hide();
  $('#maincontent h3').append('<span class="expand"></span>');
  jQuery(document.body).on('click','#maincontent div h3',function(e){
    e.preventDefault();
    jThis = $(this);
    $('#maincontent p').hide();
    $('#maincontent span').removeClass('contract').addClass('expand');
    jThis.siblings().show();
    jThis.find('span').removeClass('expand').addClass('contract');
  });
});