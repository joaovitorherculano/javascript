function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    var res = document.getElementById('resultado')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar'
        alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            alert('Passo invalido! Considerando PASSO 1')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for(var c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for(var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}