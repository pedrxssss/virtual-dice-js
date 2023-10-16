/* JavaScript lição Virtual Dice */

let numeroSorteado = 0
let imgDado = document.querySelector('.imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click', function (){
    //Adicionando animacao
    imgDado.classList.add('animar')
    imgDado.classList.add('aparecer')

    //tocar efeito sonoro
    dadoRolando.play()

    //Ocultar o botao
    btnSortear.style.display = 'none'

    //Usar o setTimeOut para definir o tempo de execucao das acoes apos 1.75seg
    setTimeout(function(){
        //Armazenr numero sorteado na variavel
        numeroSorteado = getRandomInt(1,6)

        //Escrever o numero sorteado no console
        console.log(numeroSorteado)

        //Definir atributo src com base no numero
        imgDado.setAttribute('src', './dado/'+numeroSorteado+'.png')

        //Escrever no paragrafo numero sorteado
        sorteado.textContent = numeroSorteado

        //Exibir botao sortear
        btnSortear.style.display = 'inline-block'

        //Retirar a animacao
        imgDado.classList.remove('animar')
        imgDado.classList.remove('aparecer')
    }, 1750)
})

function getRandomInt(min, max) {
    min = Math.ceil(min) // Arredonda para cima ceil = teto
    max = Math.floor(max) // Arredonda para baixo floor = chao
    return Math.floor(Math.random() * (max - min + 1)) + min
}
