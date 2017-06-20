
var technics = ["HTML5","CSS3","SQL","javaScript","jQuery","MySQL","PHP","SASS","Grunt","Bootstrap","Git","Gulp","XML","WordPress","Photoshop","Illustrator","React"];


$('document').ready(function() {
  
   //Hamburger meny, funkar ej
	$('#i-nav').click(function(){

		$(this).toggleClass('open');
		$('ul').toggleClass('show');
	});

}); 