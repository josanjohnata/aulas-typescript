// Type assertions
type JogoAssertion = {
  nome: string;
  descricao: string;
}

let jogo = {} as JogoAssertion;
jogo.nome = 'nome'
jogo.descricao = 'descricao do jogo'
