# JavaScript Intermediário
Projeto de estudos: Aqui você encontrará mais sobre JavaScript, conceitos básicos e intermediários, mais informações sobre essa linguagem de programação e alguns exercícios práticos.

# O QUE É JAVASCRIPT?

*JavaScript* é uma linguagem de programação muito popular na internet, basicamente qualquer site que você use hoje em dia muito provavelmente foi feito em JS. Se trata de uma linguagem de programação *client-side* isso significa que ela é executada no lado do cliente (um navegador do computador, por exemplo), mas não para por ai, o JS ficou tão poderoso com o passar do tempo que acabou indo para o lado do servidor também, atualmente é uma linguagem web muito poderosa, possibilitando construir um *front-end* e um *back-end* inteiro apenas usando ela.

Para chegar no resultado final que nos vemos nos sites que utilizamos no dia a dia o JS é complementado com outras ferramentas, as principais são o HTML, ferramenta responsável pelo conteúdo de uma página e CSS, ferramenta responsável pela estilização de uma página. Basicamente é com o HTML que inserimos conteúdo nas páginas, texto, imagens e etc, e para deixar tudo isso organizado e bonito, utilizamos o CSS, por fim, para dar vida a tudo isso o JS entra em ação.

# OS PRIMEIROS PASSOS

Para começar a estudar você vai precisar de algumas ferramentas, no caso do JS não são muitas, basicamente três, o Google Chrome, você precisa de um navegador. Um editor de código, recomendo o *VSCode*, da Microsoft e o *Node.js*, o Node é uma ferramenta que possibilita que você utilize o JS fora de uma navegador, no lado do servidor por exemplo, só para aprender o JS ele não é necessário, já que você pode digitar os seus primeiros comandos direto no console do navegador, porém, como vamos usar um editor de código externo para editar nossos códigos (VSCode), precisamos rodar o JS dentro dele, é ai que o Node entra em ação nesse caso.

Se você sabe o que é o Github, já tem um conhecimento sobre essa ferramenta, eu recomendo que você crie um repositório na plataforma e use o CodeSpaces, o CodeSpaces é um ambiente de desenvolvimento do GitHub na nuvem, que monta um ambiente de desenvolvimento completo para você usar no seu repositório, nesse caso tudo fica online e você não precisa baixar nem instalar nada, o Node já vem instalado automaticamente nesse ambiente, é só usar!

### BASE > EXERCÍCIO - 01
O primeiro exercício consiste em começar a usar as ferramentas web e o JS, vamos fazer isso criando um arquivo `.html`, ferramenta responsável pelo conteúdo de uma página, e nesse *HTML* vamos editar o titulo e a linguagem do nosso arquivo, dentro da Tag `<head>`, colocar um titulo(`<h1>`) e um texto(`<p>`) dentro da Tag `<body>` do *HTML*, isso significa que você esta colocando esses textos dentro do corpo do seu site. Colocamos também uma Tag `<style>` dentro do nosso *HTML* e fizermos nossas primeiras estilizações, usando a ferramenta CSS, modificamos a cor de fundo da página, a fonte e a cor da fonte. E para finalizar, criamos scripts simples usando o *JavaScript*, três scripts baseados na opção `*Window*` do navegador, criamos uma "janela" de alerta, confirmação e outra de coleta de informação. Para visualizar isso no navegador eu usei uma extensão do *VSCode*, o *LiveServer*, para rodar o projeto localmente na minha máquina.

(Confira o exercício no arquivo: ex01.html)

# COMENTÁRIOS

Os comentários servem para você comentar seu código, mas se você simplesmente escrever um texto no meio do seu código, ele vai se misturar e dar erro, é para isso que serve os símbolos `//` e o `/* */`*.* 

Com o `//`  você pode escrever um comentário em uma linha, já com o `/ * */` você pode escrever em mais de uma linha.

`//Comentário de exemplo`

`/*
Comentário de exemplo
usando duas linhas
*/`

Dessa forma você consegue deixar comentários pelo seu código sem que ele quebre.

`<!— Comentários dentro do HTML —>`

`/* Comentários dentro do CSS */`

Também é possível deixar comentários no seu HTML e CSS como nos exemplos a cima.
