var stephanie=[]
var xander = []
var jesse = []
var dataObj = {}
var fullClient = retinaSDK.FullClient("9d562520-d285-11e5-8378-4dad29be0fab")
var liteClient = retinaSDK.LiteClient("9d562520-d285-11e5-8378-4dad29be0fab")
$(document).ready(function(){
  getInfo()
  window.setTimeout(compare, 1000)

})

var reallyGetInfo = getInfo()

function getInfo(){
    getStephanieFacebook()
    getXanderFacebook()
    getXanderLinkedIn()
    getStephanieLinkedIn()
    getSMHTwitter()
    getXTwitter()
    getJFB()
    getJLN()
  }

function getJFB(){
 $.get("scraped/jcfb.json", function(response){
    addFBData(response, jesse)
    return true
  })
}

function getJLN(){
   $.get("scraped/jcln.json", function(response){
    addLNData(response, jesse)
    return true
  })
}


function appendImg(location,img){
  $('\#'+location).append( "<img id='compare' src='data:image/jpeg;base64,"+ img +"'/>")
}

function getSMHTwitter(){
  $.get("scraped/amuttican.json", function(response){
    response["results"]["collection1"].map( tweet => stephanie.push(tweet["twitter"]))
    return true
  })
}

function getXTwitter(){
  $.get("scraped/XPSON.json", function(response){
    response["results"]["collection1"].map( tweet => xander.push(tweet["twitter"]) )
    return true
  })
}

function compare(){
  getXPmap()
  getSMHmap()
  compareBulk()
  // $.get("scraped/XPSON.json", function(response){
    // response["results"]["collection1"].map( tweet => xander.push(tweet["twitter"]))
    fullClient.compareImage({expressions: [{"text": stephanie.join(" ")}, {"text": xander.join(" ")}]}, function(img){
      dataObj.comparison = img
    })
  // })
}

function getStephanieFacebook(){
  $.get("scraped/smhfb.json", function(response){
    addFBData(response, stephanie)
    return true
  })

}
function getXanderFacebook(){
  $.ajax({url: "scraped/xpFB.json"})
  .done(function(response){addFBData(response, xander)})
    return true
}
function getXanderLinkedIn(){
  $.ajax({url: "scraped/xpLN.json"})
  .done(function(response){
    addLNData(response, xander)
    return true
  })
}
function getStephanieLinkedIn(){
  $.ajax({url: "scraped/smhLN.json"})
  .done(function(response){
    addLNData(response, stephanie)
    return true
  })
}

function log(response){
  console.log(response)

}
function addLNData(lndata, person) {
  person.push(lndata.summary)
  // console.log(lndata.threeCurrentPositions.values)
  lndata.threePastPositions.values.map(job => person.push(job.summary))

  try {lndata.volunteer.volunteerExperiences.values.map(job => person.push(job.role))}
  catch (e){}
  try {lndata.threeCurrentPositions.values.map(job => person.push(job.summary))}
  catch (e){}
  // console.log(person)
}

function addFBData(fbdata, person) {
  // console.log(fbdata)
  var person = person
  fbdata.likes.data.map( like => person.push(like.name))
  person.push(fbdata.about)
  fbdata.feed.data.map( post => post.message ? person.push(post.message) : person )
  fbdata.books.data.map( book => person.push(book.name))

  fbdata.music.data.map( artist => person.push( artist.name ))

}

function getXPmap(){
  fullClient.getImage({expression: {"text": xander.join()}}, addToMapsX)
}

function getSMHmap(){
  fullClient.getImage({expression: {"text": stephanie.join()}}, addToMapsS)
}

function getJCmap(){
  fullClient.getInfo({expression: {"text": jesse.join()}}, addToMapsJ)
}

function addToMapsX(img){
    dataObj.xander = img
}
function addToMapsS(img){
    dataObj.stephanie = img
}

function addToMapsJ(img){
  dataObj.jesse = img
}

function compareBulk(){
  c1=[]
  c2=[]
  c3=[]

  fullClient.getKeywordsForText({"text": xander.join(" ")}, function(response){
    response.map( term => term != "https" && term != "http" && term != "com" ? c1.push(term) : term )
    fullClient.getKeywordsForText({"text": stephanie.join(" ")}, function(response){
      response.map( term => term != "https" && term != "http" && term != "com" ? c2.push(term) : term )
      dataObj.xanTerms= c1
      dataObj.stephTerms= c2
      fullClient.getKeywordsForText({"text": jesse.join(" ")}, function(response){
        response.map( term => term != "https" && term != "http" && term != "com" ? c3.push(term) : term )
        dataObj.jesseTerms = c3
      })
    })
  })
}

function addAllImgs(){
  appendImg(my_fingerprint, dataObj.xander)
  appendImg(my_fingerprint, dataObj.stephanie)
  appendImg(my_fingerprint, dataObj.comparison)
}


