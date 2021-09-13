// Classes e interfaces e herança e modificadores de acesso.
// class (também é possível unsar os metódos de função da mesma forma)

class User2 {
  constructor(nickname, old) {
    this.nickname = nickname;
    this.old = old;
  }
}

class Player extends User2 {
  constructor(nickname, old, game) {
    super(nickname, old);
    this.game = game;
  }
}

const jogador = new Player('josan', 29, 'Ghost of Tsushima');
console.log(jogador);
