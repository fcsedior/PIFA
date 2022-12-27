/*                                                                                                                                         TESTE JAVASCRIPT PARA O MUNDIAL DE 2022                                                                                                                       */

// PEGAR CAMPO DE RESPOSTA 

let res = document.getElementById('res')

//PEGAR EQUIPES

let time1 = document.querySelector('#time1').value
let time2 = document.querySelector('#time2').value
let time3 = document.querySelector('#time3').value
let time4 = document.querySelector('#time4').value

//FUNCTIONS

let enviar_jogo1 = document.querySelector('.enviar1')

enviar_jogo1.onclick = function() {
    let placar1 = document.querySelector('#jogo1-1').value
    let placar2 = document.querySelector('#jogo1-2').value
    let time_final1 = document.querySelector('#time5')
    if (Number(placar1) > Number(placar2)) {
        time_final1.innerHTML = `${time1}`
    }
    if (Number(placar1) < Number(placar2)) {
        time_final1.innerHTML = `${time2}`
    } 
    if (Number(placar1) === Number(placar2)) {
        res.innerHTML = `Digite um placar válido (Sem Empate)!`
    }
}

let enviar_jogo2 = document.querySelector('.enviar2')

enviar_jogo2.onclick = function() {
    let placar3 = document.querySelector('#jogo2-1').value
    let placar4 = document.querySelector('#jogo2-2').value
    let time_final2 = document.querySelector('#time6')
    if (Number(placar3) > Number(placar4)) {
        time_final2.innerHTML = `${time3}`
    }
    if (Number(placar3) < Number(placar4)) {
        time_final2.innerHTML = `${time4}`
    }
    if (Number(placar3) === Number(placar4)) {
        res.innerHTML = `Digite um placar válido (Sem Empate)!`
    }
}

/* FUNÇÃO TEMA ESCURO */

let escuro = document.querySelector('.temaescuro')
escuro.onclick = function() {
    document.body.classList.toggle('dark')
    escuro.classList.toggle('ativar')
}
