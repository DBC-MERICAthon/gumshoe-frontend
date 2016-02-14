$(document).ready(function(){
  $('body').on('click', '#cortical-button', function(e){
  	e.preventDefault();
		rotateAnimation("cortical-button",1,0);
		setTimeout(loadDigitalPrint, 3000);
	});
});

function rotateAnimation(el,speed,degrees){
	var elem = document.getElementById(el);
	elem.style.WebkitTransform = "rotate("+degrees+"deg)";
	degrees++;
	if(degrees > 359){
		degrees = 1;
	}
	setTimeout('rotateAnimation(\''+el+'\','+speed+','+degrees+')',speed);
}

function loadDigitalPrint(){
	$("#home").hide();
	$("#results").load("/pages/results.html");
	$("#results").show();
}