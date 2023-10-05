var StatusTarefa;
(function (StatusTarefa) {
    StatusTarefa["Pendente"] = "Pendente";
    StatusTarefa["Concluida"] = "Concluida";
})(StatusTarefa || (StatusTarefa = {}));
var tarefas = [];
function adcionarTarefas(descricao) {
    var novaTarefa = {
        descricao: descricao,
        status: StatusTarefa.Pendente,
    };
    tarefas.push(novaTarefa);
}
function concluirTarefa(index) {
    if (index >= 0 && index < tarefas.length) {
        tarefas[index].status = StatusTarefa.Concluida;
    }
}
function listarTarefa() {
    console.log("Tarefas:");
    tarefas.forEach(function (tarefa, index) {
        console.log("".concat(index + 1, ".").concat(tarefa.descricao, " (").concat(tarefa.status, ")"));
    });
}
adcionarTarefas("Fazer compras");
adcionarTarefas("Estudar");
listarTarefa();
concluirTarefa(0);
listarTarefa();
