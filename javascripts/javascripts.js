// $(document).ready(function(){
//     $('body').click('.find-match', function(e){
//     	e.preventDefault();
//     	console.log("hit")
//     	openResults();
//     });
// }

function closeResults(){

		$('#results-view').removeClass('open');
		// $('#results-view').animate({'opacity':0},300);

		// setTimeout(function(){
			// $('.container').slideDown();
			// $('#results-view').slideUp();

		// 	$('.container').animate({'opacity':1},300);
		// },300)
	}

	// $('.search-again').click(function(){
	// 	closeResults();
	// })


function openResults(){
	$('#results-view').show()
	$('.wrapper').hide()
	// $('#results-view').addClass('open');    //Makes prject div appear
	// $('.container').animate({'opacity':0},300);//Makes projects disappear

}

