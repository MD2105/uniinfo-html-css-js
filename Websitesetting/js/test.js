window.onscroll=function(){
	myFunction()
};
var main-menu = document.getElementById("main-menu");
var sticky = main-menu.offsetTop;
function myFunction(){
	if (window.pageYOffset >=sticky){
		main-menu.classlist.add("sticky")
	}
	else{
		main-menu.classlist.remove("sticky");
	}
	}