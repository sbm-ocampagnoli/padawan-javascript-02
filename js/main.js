var titulo = document.querySelector('.titulo');

titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector('#primeiro-paciente');

var tdNome = paciente.querySelector('.info-nome');
var tdPeso = paciente.querySelector('.info-peso');
var tdAltura = paciente.querySelector('.info-altura');
var tdImc = paciente.querySelector('.info-imc');


var nome = tdNome.textContent;
var peso = tdPeso.textContent;
var altura = tdAltura.textContent;
var imcCalculado = peso / (altura * 2);

var ehPesoValido = true;
var ehAlturaValida = true;

if (peso < 0 || peso > 1000) {
    alert(`O peso: ${peso} é inválido!`);
    ehPesoValido = false;
}

if (altura < 1.00 || altura > 3.00) {
    alert(`A altura: ${altura} é inválida!`);
    ehAlturaValida = false;
}

if (ehPesoValido && ehAlturaValida) {
    var imc = tdImc.textContent = imcCalculado;
}