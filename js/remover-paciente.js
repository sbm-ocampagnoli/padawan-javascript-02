var tabela = pegarTabelaDePacientes();


tabela.addEventListener('dblclick', function (event) {
    let elementoAlvo = event.target;
    let paciente = elementoAlvo.parentNode;

    if (paciente.tagName == 'TR'); {

        paciente.classList.add("fadeOut");
        setTimeout(() => {
            paciente.remove();
        }, 500);

    }
});