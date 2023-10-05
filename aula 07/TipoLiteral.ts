// Enum para representar status de pedidos
enum StatusPedido {
  Pendente = "Pendente",
  Aprovado = "Aprovado",
  Rejeitado = "Rejeitado",
}

let statusLiteral: StatusPedido = StatusPedido.Aprovado;

type DiaUtil = "Segunda" | "Terça" | "Quarta" | "Quinta" | "Sexta";

let diaLiteral: DiaUtil = "Quarta";
