var botaDeBuscar = document.querySelector('#buscar-pacientes');

botaDeBuscar.addEventListener('click', function () {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener('load', function () {

        var erroAjax = document.querySelector('#erro-ajax');

        if (xhr.status == 200) {

            var reponse = xhr.responseText;

            var novosPacientes = JSON.parse(reponse);

            novosPacientes.forEach(novoPaciente => {

                var novoPacienteTr = criarTr(novoPaciente);

                adicionarPacienteNaTabela(novoPacienteTr);
            });
        }
        else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
            erroAjax.textContent = "Ocorreu um erro na busca!"
        }

    });

    xhr.send();
});
