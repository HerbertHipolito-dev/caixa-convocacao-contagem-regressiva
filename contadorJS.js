const dataConvocacao = new Date("2024-10-24T00:00:00");

function atualizarContador() {
    const agora = new Date();
    const tempoRestante = dataConvocacao - agora;

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    document.getElementById("contador-dias").innerHTML = 
        ` ${dias} dias`;
    document.getElementById("contador-horas").innerHTML = 
        ` ${horas} horas`;
    document.getElementById("contador-minutos").innerHTML = 
        `${minutos} minutos`;
    document.getElementById("contador-segundos").innerHTML = 
        `${segundos} segundos`;
    
    if (tempoRestante < 0) {
        clearInterval(contagemRegressiva);
        document.getElementById("contador-div").innerHTML = "<p id='comecar-convocacao'>Convocação deve começar em breve!</p>";
        document.getElementById('falta-div').remove()
        document.getElementById('convocacao-div').remove()
    }
}

// Atualiza o contador a cada segundo
const contagemRegressiva = setInterval(atualizarContador, 1000);