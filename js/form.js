var adicionarPacienteBtn = document.querySelector('#adicionar-paciente');

adicionarPacienteBtn.addEventListener("click", function (event) {
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var paciente = obterPacienteDoFormulario(form);

    if (!validarPaciente(paciente)) {
        console.log(paciente);
        return;
    }

    var pacienteTr = criarTr(paciente);

    adicionarPacienteNaTabela(pacienteTr);

    form.reset();

});

function obterPacienteDoFormulario(form) {

    const paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularIMC(form.peso.value, form.altura.value)
    };

    return paciente;
}

function criarTr(paciente) {

    var pacienteTr = document.createElement("tr");

    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function pegarTabelaDePacientes() {
    return document.querySelector("#tabela-pacientes");
}

function adicionarPacienteNaTabela(pacienteTr) {
    let tabela = pegarTabelaDePacientes();
    tabela.appendChild(pacienteTr);
}

function montarTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validarPaciente(paciente) {
    if (validarPeso(paciente.peso) && validarAltura(paciente.altura)) {
        return true;
    }

    return false;
}