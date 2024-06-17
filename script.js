// Estrutura de Dados, Funções e Condições 


/*01 - crie uma condição composta com uma variável dia e a condição
verifica se está de dia mostre 'claro' senão mostre está 'de noite'*/

let dia = true;

if (dia) {
  console.log("Claro!");
} else {
  console.log("De noite!");
}

/* 02 - Crie um loop for() que exiba apenas 
números pares no console.log()
 */

for (let i = 2; i <= 10; i += 2) {
  console.log(`Meu número par é ${i}`);
}

//03 - crie uma função que exiba uma mensagem no console

function mensagem() {
  console.log(`Olá!! Como você está? Eu sou a mensagem no exercício 3.`);
}
mensagem();

/*04 - crie uma função que receba o seu nome
como (parâmetro) e exiba no console*/
function meuNome(nome) {
  console.log(`Meu nome é ${nome}.`);
}
meuNome("Fernanda");

/*05 - crie uma função que receba nome, idade, e um estilo 
musical preferido (parâmetros) e exiba no console */
function sobreMim(nome, idade, estiloMusical) {
  console.log(
    `Meu nome é ${nome}, tenho ${idade} anos e amo ouvir ${estiloMusical}!`
  );
}
sobreMim("Fernanda", 21, "Pop Rock");

/*06 - crie uma função que receba um filme, 
uma música (parâmetros) e exiba no console*/
function meuPapagaio(filme, musica) {
  console.log(
    `Eu lembro do meu papagaio quando assisto o filme ${filme} e ouço a música ${musica}.`
  );
}
meuPapagaio("Missão Impossível", "The Final Countdown");

/*07 - crie uma função que retorne o triplo do número 
recebido no parâmetro da função*/
function triplo(numero) {
  return numero * 3;
}
console.log(triplo(4));

/*08 - crie uma função que  verifique 
se uma  variável é true ou false*/
let tempoFrio = 22;
function verificaVariavel(tempoFrio) {
  if (tempoFrio < 23) {
    return true;
  } else {
    return false;
  }
}
console.log(verificaVariavel(tempoFrio));

//09 - Crie um array que receba 5 itens e exiba no console.

let filmes = ["Ghost", "Dirty Dancing", "Vingadores", "A Proposta", "Top Gun"];
console.log(`Os itens deste Array são ${filmes}. `);

//10 - Utilize um método para adicionar um nome ao inicio do array.
filmes.unshift("Missão Impossível");
console.log(`Os itens deste Array são ${filmes}. `);

//11 - Utilize um método para remover o último nome do array.
filmes.pop();
console.log(`Os itens deste Array são ${filmes}. `);

//12 - Utilize um método para adicionar dois nomes ao fim do array.
filmes.push("Jurassic World", "Guardiões da Galáxia");
console.log(`Os itens deste Array são ${filmes}. `);

//13 - Utilize um método para remover o primeiro nome do array.
filmes.shift();
console.log(`Os itens deste Array são ${filmes}. `);

//14 - Utilize um método para organizar em ordem crescente o seguinte array:
let numbers = [7, 5, 6, 3, 8, 9, 2, 1, 4];
numbers.sort();
console.log(numbers);

//15 - Crie um objeto que receba ao menos três propriedades sobre você.

let meuPerfil = {
  nome: "Fernanda",
  idade: 21,
  signo: "Gêmeos",
  curso: "Front-End"
};

//16 - Adicione uma nova propriedade sem alterar seu objeto inicial.
meuPerfil.estiloMusical = "Eclética";
console.log(meuPerfil);

//17 - Remova uma propriedade desse objeto.
delete meuPerfil.estiloMusical;
console.log(meuPerfil);
//18 - Mostre no console todas as propriedades desse objeto.
console.log(meuPerfil);

/*19 - Crie um array  chamado "cadastro" contendo ao menos 5 objetos.
Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos.
Na propriedade amigos, adicione ao menos 4 amigos. */

let cadastro = [
  {
    nome: "Fernanda Correa",
    idade: 21,
    telefone: "21 4002-8922",
    amigos: ["Tony Stark", "Peter Parker", "Bruce Banner", "Thor Odinson"]
  },
  {
    nome: "Tony Stark",
    idade: 53,
    telefone: "21 8922-4002",
    amigos: ["Fernanda", "Peter Parker", "Bruce Banner", "Thor Odinson"]
  },
  {
    nome: "Peter Parker",
    idade: 16,
    telefone: "21 0420-9822",
    amigos: ["Fernanda", "Tony Stark", "Bruce Banner", "Thor Odinson"]
  },
  {
    nome: "Bruce Banner",
    idade: 54,
    telefone: "21 2004-2298",
    amigos: ["Fernanda", "Tony Stark", "Peter Parker", "Bruce Banner"]
  },
  {
    nome: "Thor Odinson",
    idade: 1505,
    telefone: "21 2004-2289",
    amigos: ["Fernanda", "Tony Stark", "Peter Parker", "Bruce Banner"]
  }
];

//20 - Mostre no console o nome de um amigo de cada lista.
console.log(
  `O melhor amigo de ${cadastro[0].nome} é a ${cadastro[0].amigos[0]}!`
);
console.log(
  `A melhor amiga de ${cadastro[1].nome} é a ${cadastro[1].amigos[0]}!`
);
console.log(
  `O melhor amigo de ${cadastro[2].nome} é a ${cadastro[2].amigos[1]}!`
);
console.log(
  `O melhor amigo de ${cadastro[3].nome} é a ${cadastro[3].amigos[1]}!`
);
console.log(
  `O melhor amigo de ${cadastro[4].nome} é a ${cadastro[4].amigos[0]}!`
);

