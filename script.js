var expressao = '';
var respostaAcumulada = '';
// var temp;
var elementoVisor = document.querySelector(".visor");
// var elementoRespostas = document.querySelector(".respostas");
var elementoResposta = document.querySelector(".resposta"); // textArea

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
    // alert(expressao);
    if (expressao != '') {
        resultado = eval(expressao);
        if (resultado != undefined) {          
            mostraResposta();
            acumulaRespostas();
            zeraExpressao(); 
            // alert(expressao);
            // zeraVisor();
        } else {
            // alert(resultado);
            elementoVisor.innerHTML = expressao + "<br />" + "<br />" + "Expressão mal formada!";
        }
    }
}

function mostraResposta() {
    elementoResposta.innerHTML = expressao + " = " + resultado;
    elementoVisor.innerHTML = resultado;
}

function acumulaRespostas() {
    // alert('acumulaResposta')
    respostaAcumulada = expressao + " = " + resultado + '\n' + respostaAcumulada;  
    elementoResposta.innerHTML = respostaAcumulada;
    // elementoResposta = '';
    // atualizarExpressao(resultado);
}

function zeraExpressao() {  
    // alert(expressao);
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