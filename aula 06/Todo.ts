//definir array
let tarefas: string[] = [];

// função adiconar tarefas
function adcionarTarefas(tarefa: string): void {
  tarefas.push(tarefa);
}

// remover tarefa
function removerTarefa(index: number): void {
  if (index >= 0 && index < tarefas.length) {
    tarefas.splice(index, 1);
  }
}

//listar tarefas
function listarTarefas(): void {
  console.log("Tarefas: ");
  tarefas.forEach((tarefa, index) => {
    console.log(`${index + 1}. ${tarefa}`);
  });
}

adcionarTarefas("Fazer compras");
adcionarTarefas("Estudar TypeScript");
listarTarefas();
removerTarefa(0);
listarTarefas();
