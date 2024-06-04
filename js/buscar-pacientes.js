var botaDeBuscar = document.querySelector('#buscar-pacientes');

botaDeBuscar.addEventListener('click', function () {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener('load', function () {
        var reponse = xhr.responseText;

        var novosPacientes = JSON.parse(reponse);

        novosPacientes.forEach(novoPaciente => {

            var novoPacienteTr = criarTr(novoPaciente);

            adicionarPacienteNaTabela(novoPacienteTr);
        });
    });

    xhr.send();
});
