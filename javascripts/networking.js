$(document).ready(function(){
  // $('body').on('click', '.left-profile', function(e){
  	// e.preventDefault();
		// setTimeout(loadDigitalPrint, 3000);
	// });
		setTimeout(loadTerms, 20000);
		//   var terms = ['japan', 'jet', 'programming', 'videogames'];
  // for (i = 0; i < terms.length; i++) {
  // 	console.log(terms[i]);
  // }
});

function loadDigitalPrint(){
  appendImg('my-fingerprint', dataObj.xander)
}

function loadTerms(){
  var terms = dataObj.xanTerms;
  for (i = 0; i < terms.length; i++) {
  	terms[i] = terms[i].charAt(0).toUpperCase() + terms[i].slice(1);
  }
  for (i = 0; i < terms.length; i++) {
  	$('#my-terms').append('<li>'+terms[i]+'</li>')
  	$('#other-terms').append('<li>'+terms[terms.length - i - 1]+'</li>')
  }
}