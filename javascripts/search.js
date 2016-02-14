$(function(){
  $('body').on('submit', '.input-group', function(e){
  	e.preventDefault();
  	console.log('hit')
  	var path = $(this).attr('action'),
      method = 'GET',
      formData = $(this).serialize();
	  $.ajax({
	      url: path,
	      type: method,
	      data: formData,
	      dataType: 'json'
	    })
	    .done(function(response){
	      $('#info').html('');
	      console.log(response)
	      map.featureLayer.setGeoJSON({
	        type: "FeatureCollection",
	        features: response
	      });
	    })
	    .fail(function(response){
	      console.log('fail')
	    })    
	  })

});