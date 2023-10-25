function calcular(){
    var n1 = document.getElementById('txtn1')
    var n2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var operadores = document.getElementsByName('radcalc')
    var resul = num1 + num2
    if(operadores[0].checked){
        res.innerHTML = `O resultado entre o ${num1} e ${num2} é igual a: ${resul}`
    } else if (operadores[1].checked){
        var resul = num1 - num2
        res.innerHTML = `O resultado entre o ${num1} e ${num2} é igual a: ${resul} `
    } else if (operadores[2].checked){
        var resul = num1 * num2
        res.innerHTML = `O resultado entre o ${num1} e ${num2} é igual a: ${resul} `

    } else if (operadores[3].checked){
        var resul = num1 / num2
        res.innerHTML = `O resultado entre o ${num1} e ${num2} é igual a: ${resul} `

    } else if (operadores[4].checked){
        var resul = num1 % num2
        res.innerHTML = `O resultado entre o ${num1} e ${num2} é igual a: ${resul} `
    } else {
        res.innerHTML = '[ERRO]Por favor inserá os valores e operador para que o calculo seja realizado'
        res.style.color = 'red'
    }
}

function limpar(){
    var n1 = document.getElementById('txtn1')
    var n2 = document.getElementById('txtn2')
    var operadores = document.getElementsByName('radcalc')
    n1.value = "";
    n2.value = "";
    operadores.value = "";
   
}
