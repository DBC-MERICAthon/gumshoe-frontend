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
	$("#home").hide();
	// transitionOut($("#home"))

	$.get("/pages/results.html", function(response){
		$("#results").html(response);
		$(".wrapper").show()
		$("#results").show()
		// $("#results-view").show()
		// console.log(response)
		// transitionIn($("#results-view"))
	})
	// $("#results").show();
  appendImg('my-fingerprint', dataObj.xander)
}

function openResults(){
	$.get("/pages/networking.html", function(response){
		$("#results").html(response)
	})
}
