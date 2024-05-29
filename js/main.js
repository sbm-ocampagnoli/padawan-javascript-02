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
var imc = tdImc.textContent = imcCalculado;