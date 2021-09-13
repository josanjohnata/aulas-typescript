// Classes e interfaces e herança e modificadores de acesso.
// class (também é possível unsar os metódos de função da mesma forma)

// class User2 {
//   constructor(nickname: string, old: number) {
//     this.nickname = nickname;
//     this.old = old;
//   }
// }

// class Player extends User2 {
//   constructor(nickname: string, old: number), game: string) {
//     super(nickname, old);
//     this.game = game;
//   }
// }

// const jogador = new Player('josan', 29, 'Ghost of Tsushima');
// console.log(jogador);


// static
class User2 {
    nome: string;
    idade: number;
    constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
    }
  }
  
  class Player extends User2 {
    public jogo;

    constructor(nome: string, idade: number, jogo: string) {
      super(nome, idade);
      
      this.jogo = jogo;
    }

    dizerOJogoAtual(){
      return `Estou jogando, no momento: ${this.jogo}`;
    }

    static queHorasSao() {
      return Date();
    }

  }
  
  const jogador = new Player('josan', 29, 'Ghost of Tsushima');
  console.log(jogador.dizerOJogoAtual());
  console.log(Player.queHorasSao());
