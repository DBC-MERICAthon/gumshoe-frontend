function transitionIn(loc){
  var $loc = loc
  // console.log($loc.children("img").show())
  $loc.fadeIn(1500, "linear")
  $loc.children("img").fadeIn(4000)
}

function transitionOut(loc){
  var $loc = loc
  rotateAnimation("logoimg", .5, 0)
  $loc.fadeOut(500, "linear")
  console.log("I'm fading out")
}
