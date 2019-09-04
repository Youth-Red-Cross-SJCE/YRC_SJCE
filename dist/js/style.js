onload = start;

/* 
	Autoplay slideshow in home carousel
*/
function start() {
	var i = 1;
	function Move() {
		i = (i % 3) + 1; // 4 is the Number of image in slider
		document.getElementById("i" + i).checked = true;
	}
	setInterval(Move, 3000); //change img in 3 sec
}

/* 
	Opening and closing the side menu
*/
function openSlideMenu() {
	document.getElementById("side-menu").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
}

function closeSlideMenu() {
	document.getElementById("side-menu").style.width = "0px";
	document.getElementById("main").style.marginLeft = "0px";
}
