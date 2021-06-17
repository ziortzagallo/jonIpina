
console.log("hola")

const spanishBotom = document.getElementById("spanish")
const englishBotom = document.getElementById("english")
const basqueBotom = document.getElementById("basque")

const menu=document.getElementsByClassName("menu")

var pageText
spanishBotom.addEventListener("click", translateToSpanish)
englishBotom.addEventListener("click", translateToEnglish)
basqueBotom.addEventListener("click", translateToBasque)

function translateToSpanish() {
    chargeTraduction("./translate_es.json") 
}

function translateToBasque() {
    chargeTraduction("./translate_eus.json")
    
}

async function translateToEnglish() {
    chargeTraduction("./translate_en.json")  
}

async function chargeTraduction(languageFile){
    pageText = await fetch(languageFile)
        .then(response => {
            return response.json();
        })
        .then(data => data); 
    console.log(pageText)

    for (i=0; i<6; i++) {
        menu[i].innerHTML=pageText.menu[i]
    }
}