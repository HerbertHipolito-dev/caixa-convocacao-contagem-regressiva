const dataConvocacao = new Date("2024-11-14T00:00:00");

function atualizarContador() {
    const agora = new Date();
    const tempoRestante = dataConvocacao - agora;

    const dias = Math.floor(tempoRestante / (1000 * 60 * 60 * 24));
    const horas = Math.floor((tempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000);

    document.getElementById("contador-dias").innerHTML = 
        ` ${dias} d`;
    document.getElementById("contador-horas").innerHTML = 
        ` ${horas} h`;
    document.getElementById("contador-minutos").innerHTML = 
        `${minutos} m`;
    document.getElementById("contador-segundos").innerHTML = 
        `${segundos} s`;
    
    if (tempoRestante < 0) {
        clearInterval(contagemRegressiva);
        document.getElementById("contador-div").innerHTML = "<p id='comecar-convocacao'>🎉Convocação deve começar em breve!🎉</p>";
        document.getElementById('falta-div').remove()
        document.getElementById('convocacao-div').remove()
    }
}

const contagemRegressiva = setInterval(atualizarContador, 1000);