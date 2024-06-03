var titulo = document.querySelector('.titulo');

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

for (let i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

    var tdNome = paciente.querySelector('.info-nome');
    var tdPeso = paciente.querySelector('.info-peso');
    var tdAltura = paciente.querySelector('.info-altura');
    var tdImc = paciente.querySelector('.info-imc');


    var nome = tdNome.textContent;
    var peso = tdPeso.textContent;
    var altura = tdAltura.textContent;
    var imcCalculado = peso / (altura * 2);
    var imc;

    var ehPesoValido = true;
    var ehAlturaValida = true;

    if (peso <= 0 || peso >= 1000) {
        imc = tdImc.textContent = `O peso: ${peso} é inválido!`;
        ehPesoValido = false;
        destacarPacienteInvalido(paciente);
    }

    if (altura <= 0 || altura >= 3.00) {
        imc = tdImc.textContent = `A altura: ${altura} é inválida!`;
        ehAlturaValida = false;
        destacarPacienteInvalido(paciente);
    }

    if (ehPesoValido && ehAlturaValida) {
        tdImc.textContent = calcularIMC(peso, altura);
    }
}

function calcularIMC(peso, altura) {
    let imc;
    imc = peso / (altura * altura);
    return imc.toFixed(2);

}

function destacarPacienteInvalido(paciente) {
    paciente.classList.add("paciente-invalido");
}