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

    if (!ehPesoValido(peso)) {
        imc = tdImc.textContent = `O peso: ${peso} é inválido!`;
        destacarPacienteInvalido(paciente);
    }

    if (!ehAlturaValida(altura)) {
        imc = tdImc.textContent = `A altura: ${altura} é inválida!`;
        destacarPacienteInvalido(paciente);
    }

    else {
        tdImc.textContent = calcularIMC(peso, altura);
    }


}

function ehPesoValido(peso) {
    let pesoValido = (peso > 0 && peso <= 999);

    if (pesoValido) {
        return true;
    }

    return false;
}

function ehAlturaValida(altura) {
    let alturaValida = (altura > 0 && altura <= 3.00);

    if (alturaValida) {
        return true;
    }

    return false;
}

function calcularIMC(peso, altura) {
    let imc;
    imc = peso / (altura * altura);
    return imc.toFixed(2);

}

function destacarPacienteInvalido(paciente) {
    paciente.classList.add("paciente-invalido");
}