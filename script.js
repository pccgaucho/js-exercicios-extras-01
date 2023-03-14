
/*
function executarTudo(){
    alterarCorCaixa()
    alterarCorBorda()
    alterarDisplayOff()
    alterarDisplayOn()
}
*/
// Coloquei com esta versão, agora funcionando.
function executarTudo() {
    let atributo = ["backgroundColor", "borderColor", "display", "display"]
    let caracteristica = ["red", "pink", "none", "block"]
    for (let i = 0; i < 4; i++) {
        let k = i + 1
        let elemento = document.getElementById("boxModel0" + k)
        console.log(elemento)
        elemento.style[atributo[i]] = caracteristica[i]
    }
}


/*
function alterarCorCaixa() {
    const elementoCaixa = document.getElementById("boxModel01")
    elementoCaixa.style.backgroundColor = "red"
}

function alterarCorBorda() {
    const elementoBorda = document.getElementById("boxModel02")
    elementoBorda.style.borderColor = "pink"
}

function alterarDisplayOff() {
    const elementoDisplay = document.getElementById("boxModel03")
    elementoDisplay.style.display = "none"
}

function alterarDisplayOn() {
    const elementoDisplay = document.getElementById("boxModel04")
    elementoDisplay.style.display = "block"
}
*/
