$(document).ready(function(){
  loadStephTerms();
  setTimeout(loadXanTerms, 4000);
  $('body').on('click', '#cortical-button-search', function(e){
    e.preventDefault();
    rotateAnimation2("cortical-button-search",1,0);
  });

});

function loadDigitalPrint(){
  var my_src = 'data:image/jpeg;base64,' + dataObj.jesse
  $('#right-data-image').attr("src", my_src);
}

function loadStephTerms(){
  var terms = dataObj.stephTerms;
  for (i = 0; i < terms.length; i++) {
    terms[i] = terms[i].charAt(0).toUpperCase() + terms[i].slice(1);
  }
  for (i = 0; i < terms.length; i++) {
    $('#left-terms').append('<li>'+terms[i]+'</li>')
  }
}

function loadXanTerms(){
  var terms = dataObj.xanTerms;
  for (i = 0; i < terms.length; i++) {
    terms[i] = terms[i].charAt(0).toUpperCase() + terms[i].slice(1);
  }
  for (i = 0; i < terms.length; i++) {
    $('#right-terms').append('<li>'+terms[i]+'</li>')
  }
  $('#right-profile-image').attr("src","../images/xander-headshot.jpg");
  $('#right-data-image').attr("src","../images/xander-dataprint.png");
  $('#center-data-image').attr("src","../images/steph-xander-data.png");
}

function loadJesseTerms(){
  var terms = dataObj.jesseTerms;
  $('#right-terms').empty();
  for (i = 0; i < terms.length; i++) {
    terms[i] = terms[i].charAt(0).toUpperCase() + terms[i].slice(1);
  }
  for (i = 0; i < terms.length; i++) {
    $('#right-terms').append('<li>'+terms[i]+'</li>')
  }
}

function rotateAnimation2(el,speed,degrees){
  var elem = document.getElementById(el);
  elem.style.WebkitTransform = "rotate("+degrees+"deg)";
  degrees++;
  if(degrees > 360 * 2.5){
    $('#cortical-button-search').hide();
    $('#cortical-button-search-green').show();
    swapMatchData();
    return;
  }
  setTimeout('rotateAnimation2(\''+el+'\','+speed+','+degrees+')',speed);
}

function swapMatchData() {
  $('#right-profile-image').attr("src","../images/jesse-headshot.jpg");
  $('#right-data-image').attr("src","../images/jesse-dataprint.png");
  $('#center-data-image').attr("src","../images/steph-jesse-data.png");
  loadJesseTerms();
  // loadDigitalPrint();
}