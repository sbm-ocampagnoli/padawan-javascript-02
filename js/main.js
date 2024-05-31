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
        imc = tdImc.textContent = imcCalculado.toFixed(2);
    }
}

function destacarPacienteInvalido(paciente) {
    paciente.classList.add("paciente-invalido");
}

var adicionarPacienteBtn = document.querySelector('#adicionar-paciente');

adicionarPacienteBtn.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;


    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);

    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);
});