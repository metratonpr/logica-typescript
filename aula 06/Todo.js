//definir array
var tarefas = [];
// função adiconar tarefas
function adcionarTarefas(tarefa) {
    tarefas.push(tarefa);
}
// remover tarefa
function removerTarefa(index) {
    if (index >= 0 && index < tarefas.length) {
        tarefas.splice(index, 1);
    }
}
//listar tarefas
function listarTarefas() {
    console.log("Tarefas: ");
    tarefas.forEach(function (tarefa, index) {
        console.log("".concat(index + 1, ". ").concat(tarefa));
    });
}
adcionarTarefas("Fazer compras");
adcionarTarefas("Estudar TypeScript");
listarTarefas();
removerTarefa(0);
listarTarefas();
