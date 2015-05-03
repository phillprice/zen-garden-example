$( document ).ready(function() {
	var links="";
	function getArray(){
    $.getJSON('/Assets/links.json', function (json) {
      for (var key in json) {
        if (json.hasOwnProperty(key)) {
        	var item = json[key];
          links+="<li><a href=\"http://"+item.url+"\" title=\""+item.title+"\">"+item.title+"</a> <span>"+item.author+"</span></li>";
        }
      }
    });
    $('#links ul').append(links);
	}
	getArray();
});