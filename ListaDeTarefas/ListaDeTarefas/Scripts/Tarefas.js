function CriarTarefa() {
    debugger;

    var tarefa = document.getElementById("idTarefa").value;
    var status = document.getElementById("idStatus").value;
    var responsavel = document.getElementById("idResponsavel").value;
    var prioridade = document.getElementById("idPrioridade").value;

    $.ajax({
        type: 'POST',
        url: '/Tarefas/CriarTarefa',
        data: {
            'Tarefa': tarefa,
            'Status': status,
            'Responsavel': responsavel,
            'Prioridade': prioridade
        },
        dataType: 'html',
        cache: 'false',
        async: 'true',
        statusCode: {
            200: function (resultado) {
                debugger;
                //DesbloquearPagina();
                alert('Inserido com sucesso!');
                location.reload();
            },
            99: function (resultado) {
                //DesbloquearPagina();
                debugger;

                alert('erro ao inserir!');
            }
        }
    });
}
function EditarTarefa(id) {

    var tarefa = document.getElementById("idTarefaEditar").value;
    var status = document.getElementById("idStatusEditar").value;
    var responsavel = document.getElementById("idResponsavelEditar").value;
    var prioridade = document.getElementById("idPrioridadeEditar").value;

    $.ajax({
        type: 'POST',
        url: '/Tarefas/EditarTarefa',
        data: {
            'ID': id,
            'Tarefa': tarefa,
            'Status': status,
            'Responsavel': responsavel,
            'Prioridade': prioridade
        },
        dataType: 'html',
        cache: 'false',
        async: 'true',
        statusCode: {
            200: function (resultado) {
                debugger;
                //DesbloquearPagina();
                alert('Atualizado com sucesso!');
                location.reload();
            },
            99: function (resultado) {
                //DesbloquearPagina();
                debugger;

                alert('erro ao atualizar!');
            }
        }
    });
}
function ExcluirTarefa(id) {
    debugger;
    //BloquearPagina('Excluindo Tarefa...');

    $.ajax({
        type: 'POST',
        url: '/Tarefas/ExcluirTarefa',
        data: {
            'id': id
        },
        dataType: 'html',
        cache: 'false',
        async: 'true',
        statusCode: {
            200: function (resultado) {
                debugger;
                //DesbloquearPagina();
                alert('removido com sucesso!');
                location.reload();
            },
            99: function (resultado) {
                //DesbloquearPagina();
                debugger;

                alert('erro ao remover!');
            }
        }
    });
}
function BloquearPagina(mensagem) {
    //Fazer um temporizador carregando
    $.blockUI({
        message: '<h3 style="color:#ffffff">' + mensagem + '</h3>',
        baseZ: 4000,
        css: {
            border: 'none',
            padding: '15px',
            backgroundColor: '#000',
            opacity: .5,
            color: '#ffffff'
        }
    });
}
function FecharModalAdicionar() {
    // Obtem o modal
    var modalAdicionar = document.getElementById("modalAdicionar");

    // Obtem o elemento <span> que fecha o modal
    var span = document.getElementsByClassName("closeAdicionar")[0];

    // Quando o usuário clicar em <span> (x), fechar o modal
    span.onclick = function () {
        modalAdicionar.style.display = "none";
    }

    // Fechar quando o usuário clicar em qualquer lugar fora do modal
    window.onclick = function (event) {
        debugger;
        if (event.target == modalAdicionar) {
            modalAdicionar.style.display = "none";
        }
    }
}
function ChamarModalAdicionar() {
    // Obtem o modal
    var modalAdicionar = document.getElementById("modalAdicionar");

    // Obtem o botão que abre o modal para adicionar
    var btnAdicionar = document.getElementById("btnAdicionar");



    // Quando o usuário clicar no botão, abra o modal
    btnAdicionar.onclick = function () {
        modalAdicionar.style.display = "block";
    }

    // Quando o usuário clicar no botão, abra o modal
    btnAdicionar.onclick = function () {
        modalAdicionar.style.display = "block";
    }
}
function ChamarModalEditar() {
    debugger;
    // Obtem o modal
    var modalEditar = document.getElementById("modalEditar");

    // Obtem o botão que abre o modal para adicionar
    var btnEditar = document.getElementById("btnEditar");

    // Quando o usuário clicar no botão, abra o modal
    btnEditar.onclick = function () {
        modalEditar.style.display = "block";
    }

}
function FecharModalEditar() {
    // Obtem o modal
    var modalEditar = document.getElementById("modalEditar");

    // Obtem o elemento <span> que fecha o modal
    var spanEditar = document.getElementsByClassName("closeEditar")[0]

    // Quando o usuário clicar em <span> (x), fechar o modal
    spanEditar.onclick = function () {
        modalEditar.style.display = "none";
    }

    // Fechar quando o usuário clicar em qualquer lugar fora do modal
    window.onclick = function (event) {
        if (event.target == modalEditar) {
            modalEditar.style.display = "none";
        }
    }
}



//-- CÓDIGOS ÚTEIS --//
//    Limpar campos - Usar no sucess de algum ajax para a tela ficar zerada ao final de uma operação
//    $('#idDoCampo').val('');
//    $('#idDoCampo').prop('unchecked');

////Fechar modal
//$("body").on("click", "#idDoBotaoFechar", function () {
//    $('#DivModal').dialog('close');
//});