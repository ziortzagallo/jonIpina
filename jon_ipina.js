
console.log("hola")

const spanishBotom = document.getElementById("spanish")
const englishBotom = document.getElementById("english")
const basqueBotom = document.getElementById("basque")

const menu=document.getElementsByClassName("menu")

var pageText
spanishBotom.addEventListener("click", translateToSpanish)
englishBotom.addEventListener("click", translateToEnglish)
basqueBotom.addEventListener("click", translateToBasque)

async function translateToSpanish() {
    console.log("HOLA 1")

    pageText = await fetch("./translate_es.json")
        .then(response => {
            return response.json();
        })
        .then(data => data); 
    console.log(pageText)
    chargeTraduction()
    
}
async function translateToBasque() {
    console.log("HOLA 1")

    pageText = await fetch("./translate_eus.json")
        .then(response => {
            return response.json();
        })
        .then(data => data); 
    console.log(pageText)
    chargeTraduction()
    
}

async function translateToEnglish() {
    console.log("HOLA 1")

    pageText = await fetch("./translate_en.json")
        .then(response => {
            return response.json();
        })
        .then(data => data); 
    console.log(pageText)
    chargeTraduction()
    
}

function chargeTraduction(){
    for (i=0; i<6; i++) {
        menu[i].innerHTML=pageText.menu[i]
    }
}