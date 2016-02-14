$(window).load(function(){


    $('.input-group-btn').click(function(e){
    	e.preventDefault();
    	openResults();
    });

    function openResults(){

		$('#results-view').addClass('open');    //Makes prject div appear
		$('.container').animate({'opacity':0},300);//Makes projects disappear
		
		setTimeout(function(){
			$('#results-view').slideDown();
			$('.row').slideUp();	
		},300);
	}
	
	function closeResults(){

		$('#results-view').removeClass('open');
		$('#results-view').animate({'opacity':0},300);
		
		setTimeout(function(){
			$('.row').slideDown();
			$('#results-view').slideUp();

			$('.row').animate({'opacity':1},300);	
		},300)	
	}

	$('.search-again').click(function(){
		closeResults();
	})

});