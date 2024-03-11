let str = document.getElementById("num1")
let strN = []
let lista = document.getElementById("flist")
let res = document.querySelector("div#res")

function Guardar() {

    if (Number(str.value) > 100 || strN.includes(Number(str.value)) || str.value.length == 0) {
        window.alert("Numero Invalido!")
    } else {
        let v = Number(str.value)
        strN.push(v)
        let item = document.createElement("option")
        item.text = `Valor ${v} adicionado.`
        lista.appendChild(item)
    }
    str.value = ""
    str.focus()
    res.innerHTML = ""
}

function Mostrar() {
    if (strN.length == 0) {
        window.alert("Nenhum dado encontrado!")
    } else {
        let tot = strN.length
        let maiv = strN[0]
        let menv = strN[0]
        let soma = 0
        let media = 0
        for (let pos in strN) {
            soma += strN[pos]
            if (strN[pos] > maiv)
                maiv = strN[pos]
            if (strN[pos] < menv)
                menv = strN[pos]
        }
        media = soma / tot

        res.innerHTML = ""
        res.innerHTML += `<p>Ao todo temos ${tot} elemento(s)</p>`
        res.innerHTML += `<p>O menor valor inserido foi o ${menv}</p>`
        res.innerHTML += `<p>O maior valor inserido foi o ${maiv}</p>`
        res.innerHTML += `<p>A soma dos valores foi ${soma}</p>`
        res.innerHTML += `<p>A media dos valores foi de ${media.toFixed(2)}`

    }
}


