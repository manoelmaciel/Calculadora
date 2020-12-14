var expressao = '';
var acumulado = '';
// var temp;
var elementoVisor = document.querySelector(".visor");
var elementoRespostas = document.querySelector(".respostas");
var elementoResposta = document.querySelector(".resposta");

function clicou(n) {
    expressao += n; 
    if (expressao == n) resultado = '';
    elementoVisor.innerHTML = expressao;
}

function clicouOperador(operador) {
    if (resultado != '') { 
        expressao += resultado + operador;    
    } else {
        expressao += operador;
    }
    elementoVisor.innerHTML = expressao;
}

function resolva(expressao) {
    if (expressao != '') {
        resultado = eval(expressao);
        if (resultado !== undefined) {
            mostraResposta();
            acumulaRespostas();
            zeraExpressao(); 
            // zeraVisor();
        } else {
            alert(resultado);
            elementoVisor.innerHTML = expressao + "<br />" + "<br />" + "Expressão mal formada!";
        }
    }
}

function mostraResposta() {
    elementoResposta.innerHTML = expressao + " = " + resultado;
    elementoVisor.innerHTML = resultado;
}

function acumulaRespostas() {
    acumulado += expressao + " = " + resultado + "<br />";  
    elementoRespostas.innerHTML = acumulado;
    elementoResposta = '';
    // atualizarExpressao(resultado);
}

function zeraExpressao() {  
    expressao = '';
}

function zeraVisor() {
    elementoVisor.innerHTML = '';
}

function voltar(valor) {
    // alert('Voltar');
    temp = valor.substr(0,(valor.length - 1));
    elementoVisor.innerHTML = temp;
    atualizarExpressao(temp);
}

function atualizarExpressao(valor) {
    expressao = valor;
}

function apagar() {
    zeraExpressao();
    zeraVisor();
}