const key = "b042272e7e47969a37c379aba11644c4";


function exibirDados(dados){
    document.querySelector(".city").innerHTML =    document.querySelector(".temp").innerHTML =  "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML =    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C";
    document.querySelector(".description").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade" + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 
}

async function buscarCidade(cidade){
    let dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    exibirDados(dados);
}

function clickButton(){
    let cidade = document.querySelector(".input-city").value;
    buscarCidade(cidade)  
}