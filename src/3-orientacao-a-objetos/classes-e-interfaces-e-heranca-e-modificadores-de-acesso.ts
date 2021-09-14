// Classes e interfaces e herança e modificadores de acesso.
// class (também é possível unsar os métodos de função da mesma forma)

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
  
  // const jogador = new Player('josan', 29, 'Ghost of Tsushima');
  // console.log(jogador.dizerOJogoAtual());
  // console.log(Player.queHorasSao());


  // private, protected, public
  // public: acessível de forma geral, dentro e fora da classe
  // private: é acessível apenas dentro da classe onde o campo foi criado
  // protected: é acessível apenas dentro da classe (e subclasses) onde o campo foi criado

  class Jogo {
    public nome;

    constructor(nome: string) {
      this.nome = nome;
    }

    dizerNome() {
      return `O nome do jogo é: ${this.nome}`;
    }
  }

  // class JogoComDescricao extends Jogo {
  //   private descricao;

  //   constructor(nome: string, descricao: string) {
  //       super(nome);

  //       this.descricao = descricao;
  //   }
  // }
  // const ghost = new JogoComDescricao('Ghost of Tsushima', 'É um jogo muito batuta cheio de samurai por aí');
  // console.log(ghost.dizerNome());

  // interfaces
  interface IJogoComDescricao {
    // nome: string;
    descricao: string;
    dizerNomeComDescricao(): string;
  }

  // implements
  class JogoComDescricao extends Jogo implements IJogoComDescricao {
    public descricao;

    constructor(nome: string, descricao: string) {
        super(nome);

        this.descricao = descricao;
    }

    dizerNomeComDescricao() {
      return `O nome do jogo é: ${this.nome}`;
    }
  }
  