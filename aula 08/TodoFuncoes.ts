enum StatusTarefaF {
  Pendente = "Pendente",
  Concluida = "Concluida",
}

interface Tarefa {
  descricao: string;
  statusF: StatusTarefaF;
  dataConclusao?: string;
}

let tarefasF: Tarefa[] = [];

function adicionarTarefa(descricao: string): void {
  const novaTarefa: Tarefa = {
    descricao,
    statusF: StatusTarefaF.Pendente,
  };
  tarefasF.push(novaTarefa);
}

function concluirTarefa(index: number, dataConclusao?: string): void {
  if (index >= 0 && index < tarefasF.length) {
    tarefasF[index].statusF = StatusTarefaF.Concluida;
    if (dataConclusao) {
      tarefasF[index].dataConclusao = dataConclusao;
    }
  }
}

function listarTarefas(status?: StatusTarefaF): void {
  console.log("Tarefas:");
  tarefasF.forEach((tarefa, index) => {
    if (!status || tarefa.statusF === status) {
      const infoExtra = tarefa.dataConclusao
        ? ` (Concluida em ${tarefa.dataConclusao})`
        : "";

      console.log(
        `${index + 1}. ${tarefa.descricao} (${tarefa.statusF} ${infoExtra})`
      );
    }
  });
}

adicionarTarefa("Fazer Compras");
adicionarTarefa("Estudar TypeScript");
concluirTarefa(0, "2023-10-15");
listarTarefas(StatusTarefaF.Concluida);
