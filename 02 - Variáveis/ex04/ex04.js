//Variáveis usando "let"

/*
Umas das diferencas de "var" para "let" é que não conseguimos 
usar o mesmo nome em variáveis diferentes, exemplo: let email = "email-01" | let email = "email-02".
Não conseguimos executar um código como está no exemplo, isso só é possível com "var".
*/

//Variável sem valor
let email;
console.log(email);

//Variável com valor
let email2 = "lucas@email.com";
console.log(email2);

//Substituição do valor da variável
email = "carlos@email.com";
console.log(email);

//Case sensitive
//O JavaScript diferencia os textos de minúsculo e maiúsculo, exemplo:
site = "Digite seu e-mail no site";
Site = "Não Digite seu e-mail";

console.log(site);
console.log(Site);
