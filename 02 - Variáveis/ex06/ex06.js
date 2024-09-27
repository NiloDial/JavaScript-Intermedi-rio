// Entendendo o "escopo" dos variáveis

/* 
Var

Abrange o escolo global, a variável "var" pode ser acessa de "qualquer lugar".
*/

/*
Let

Abrange o escolo de bloco e local, a viriável se contem numa parte especifica do código.
*/

/*
Const

Abrange o escolo de bloco e local, a viriável se contem numa parte especifica do código.
*/

//EXEMPLOS

// Escopo global

var nome = "Lucas";

{
  // Escopo de bloco
  console.log(nome);
}

{
  // Escopo de bloco
  let nome = "Lucas";
  console.log(nome);
}
