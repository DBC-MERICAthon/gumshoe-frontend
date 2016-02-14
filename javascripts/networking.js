$(document).ready(function(){
	setTimeout(loadTerms, 200);
  setTimeout(loadDigitalPrint, 3000);

  $('body').on('click', '#cortical-button-search', function(e){
    e.preventDefault();
    rotateAnimation("cortical-button-search",1,0);
  });
  
});

function loadDigitalPrint(){
  appendImg('my-fingerprint', dataObj.xander)
}

function loadTerms(){
  // console.log(dataObj.xanTerms[0])
  // var terms = dataObj.xanTerms;
  var terms = ['japan', 'jet', 'videogames', 'coding', 'ucla', 'california', 'beard'];
  for (i = 0; i < terms.length; i++) {
  	terms[i] = terms[i].charAt(0).toUpperCase() + terms[i].slice(1);
  }
  for (i = 0; i < terms.length; i++) {
  	$('#left-terms').append('<li>'+terms[i]+'</li>')
  	$('#right-terms').append('<li>'+terms[terms.length - i - 1]+'</li>')
  }
}

function rotateAnimation(el,speed,degrees){
  var elem = document.getElementById(el);
  elem.style.WebkitTransform = "rotate("+degrees+"deg)";
  degrees++;
  if(degrees > 359){
    degrees = 1;
  }
  // setTimeout('rotateAnimation(\''+el+'\','+speed+','+degrees+')',speed);
}