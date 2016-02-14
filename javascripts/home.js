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
		try {dataObj.stephTerms.map(term => list += "<li>"+ term+"</li>")}
		catch(e){
			list = "<li>lucky</li><li>super</li><li>pic</li><li>love</li><li>api</li><li>things</li><li>twitter</li>"
		}
		// console.log(list)
		appendImg("center-div", dataObj.stephanie)
		$("#center-div").append("<div id='left-terms-wrapper'><ul id='left-terms'>" + list + "</ul></div>")

		$("#results").fadeIn()


	})
  appendImg('my-fingerprint', dataObj.xander)
}

function openResults(){
	$.get("/pages/networking.html", function(response){
		$("#results").html(response)
	})
}
