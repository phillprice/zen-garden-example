$( document ).ready(function() {
	var links;
	function getArray(){
    $.getJSON('/Assets/links.json', function (json) {
      for (var key in json) {
        if (json.hasOwnProperty(key)) {
        	link+="<li><a href=\"#\" title=\"title\">Zen City Morning</a> <span>by Ray Henry</span></li>";
        }
      }
    });
    $('#links ul').append(links);
	}
	getArray();
});