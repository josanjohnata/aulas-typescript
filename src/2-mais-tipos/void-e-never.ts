// Quando uma função não tem um retorno explicito, por padrão o compilador interpreta como void(undefined)
function principal(): void {
  console.log('Executando');
};

principal();

// Laços de repetição infinitos
// ou funções que disparam erros.
function funcaoQueNuncaRetorna(): never {
  while(true) {
    // return alguma coisa;
  }
};

// function funcaoQueNuncaRetorna(): never {
//  throw new Error('Hello World')
// };
// const a = funcaoQueNuncaRetorna()

funcaoQueNuncaRetorna();
