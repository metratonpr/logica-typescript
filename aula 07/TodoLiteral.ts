enum StatusTarefa {
  Pendente = "Pendente",
  Concluida = "Concluida",
}

interface Tarefa {
  descricao: string;
  status: StatusTarefa;
}

let tarefas: Tarefa[] = [];
function adcionarTarefas(descricao: string): void {
  const novaTarefa: Tarefa = {
    descricao,
    status: StatusTarefa.Pendente,
  };

  tarefas.push(novaTarefa);
}

function concluirTarefa(index: number): void {
  if (index >= 0 && index < tarefas.length) {
    tarefas[index].status = StatusTarefa.Concluida;
  }
}

function listarTarefa(): void {
  console.log("Tarefas:");
  tarefas.forEach((tarefa, index) => {
    console.log(`${index + 1}.${tarefa.descricao} (${tarefa.status})`);
  });
}

adcionarTarefas("Fazer compras");
adcionarTarefas("Estudar");
listarTarefa();
concluirTarefa(0);
listarTarefa();
