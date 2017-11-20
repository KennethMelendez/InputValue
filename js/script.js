//Variables for all of the INPUT BOXES
var nounInput = document.querySelector('#nounInput');
var adjectiveInput = document.querySelector('#adjectiveInput');
var verbInput = document.querySelector('#verbInput');
var submit = document.querySelector('#submit');

//Variables for all of RESPONSE TAGS
var nounResponse = document.querySelector('#nounResponse');
var adjectiveResponse = document.querySelector('#adjectiveResponse');
var verbResponse = document.querySelector('#verbResponse');


//THIS WILL ONLY ACTIVATE IF THESE CONTENTS ARE ON THE PAGE
if(nounInput && adjectiveInput && verbInput && nounResponse && adjectiveResponse && verbResponse && submit){

//This creates a click event that will only activate when you click the button.
//When button is clicked and submitted you will DISPLAY OUR INPUTS
submit.addEventListener('click',function(){
  var nounDisplay = nounInput.value;
  nounResponse.textContent = nounDisplay;
  console.log(nounDisplay);

  var adjectiveDisplay = adjectiveInput.value;
  adjectiveResponse.textContent = adjectiveDisplay;
  console.log(adjectiveDisplay);

  var verbDisplay = verbInput.value;
  verbResponse.textContent = verbDisplay;
  console.log(verbDisplay);




})
}
