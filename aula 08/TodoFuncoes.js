var StatusTarefaF;
(function (StatusTarefaF) {
    StatusTarefaF["Pendente"] = "Pendente";
    StatusTarefaF["Concluida"] = "Concluida";
})(StatusTarefaF || (StatusTarefaF = {}));
var tarefasF = [];
function adicionarTarefa(descricao) {
    var novaTarefa = {
        descricao: descricao,
        statusF: StatusTarefaF.Pendente,
    };
    tarefasF.push(novaTarefa);
}
function concluirTarefa(index, dataConclusao) {
    if (index >= 0 && index < tarefasF.length) {
        tarefasF[index].statusF = StatusTarefaF.Concluida;
        if (dataConclusao) {
            tarefasF[index].dataConclusao = dataConclusao;
        }
    }
}
function listarTarefas(status) {
    console.log("Tarefas:");
    tarefasF.forEach(function (tarefa, index) {
        if (!status || tarefa.statusF === status) {
            var infoExtra = tarefa.dataConclusao
                ? " (Concluida em ".concat(tarefa.dataConclusao, ")")
                : "";
            console.log("".concat(index + 1, ". ").concat(tarefa.descricao, " (").concat(tarefa.statusF, " ").concat(infoExtra, ")"));
        }
    });
}
adicionarTarefa("Fazer Compras");
adicionarTarefa("Estudar TypeScript");
concluirTarefa(0, "2023-10-15");
listarTarefas(StatusTarefaF.Concluida);
