$(document).ready(function(){
  $('body').on('click', '#cortical-button', function(e){
  	e.preventDefault();
		rotateAnimation("cortical-button",1,0);
		setTimeout(loadDigitalPrint, 3000);
	});
	  $('body').on('click', '#match', function(e){
      // e.preventDefault();
      console.log("hit")
      openResults();
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
	$("#home").fadeOut();

	$.get("/pages/results.html", function(response){
		$("#results").html(response);
		// $(".wrapper").show()
		var list = ""
		try {dataObj.stephTerms.map(term => list += "<li id= "+term+">"+ term+"</li>")}
		catch(e){
			list = "<li id='lucky'>lucky</li><li id='super'>super</li><li id='pic'>pic</li><li id='love'>love</li><li id='api'>api</li><li id='things'>things</li><li id='twitter'>twitter</li>"
		}
		// console.log(list)
		appendImg("center-div", dataObj.stephanie)
		$("#center-div").append("<div id='left-terms-wrapper'><ul id='left-terms'>" + list + "</ul></div>")

		$("#results").fadeIn()


	})
  // appendImg('my-fingerprint', dataObj.xander)
}

function openResults(){
	$.get("/pages/networking.html", function(response){
		$("#results").html(response)
	})
}
