var txtInput = document.querySelector("#txt-input")
var btnTranslate = document.querySelector(".btn-translate")
var outputContainer = document.querySelector("#output-container")

var serverURL = "https://api.funtranslations.com/translate/minion.json"

//function to generate translationURL using API 
function translationURL(userInput){
    return serverURL+"?text="+userInput
}

//function to handle error
function errorHandler(error){
    console.log(error)
    alert("Something went wrong(You might have exhausted your 5 translation per hour)! Try again after some time")
}

//Function to translate userInput to banana language
function translateToBanana(){
    //store userInput
    var userInput = txtInput.value;
    //fetch the url and output the translated text in output container
    fetch(translationURL(userInput))
    .then((response)=>response.json())
    .then((json)=>{
        var translatedOutput=json.contents.translated;
        outputContainer.innerHTML = translatedOutput
    })
    .catch(errorHandler)
}
//Calling addEventListener
btnTranslate.addEventListener("click",translateToBanana)