# Leitor-de-Feed
### Um conjunto de suites de testes para validação da aplicação
## Instrução:

 ## *** feedreader.js ***: Esse arquivo o jasmine irá ler para verificar a validação dos testes dentro
da função.

1) A **PRIMEIRA** suite de testes (RSS Feeds), sua função é testar se os itens do array allFeeds estão definidos ou vazios.
 Posso ver um erro, caso mude esse array e o torne vazio.

   a)O spec(URL nao esta vazio) realiza um loop no item URL de allFeeds, usando um forEach e verifica se os itens 
   estão definidos ou nao são 0(vazios).

   b)Esse spec(NAME nao esta vazio) realiza um loop no item NAME de allFeeds, usando um forEach e verifica se os itens
   estão definidos ou nao são 0(vazios).

2) A **SEGUNDA** suite de testes(Menu) verifica no primeiro spec se a classe body, contém um menu-hidden.

   a) No segundo spec(A visibilidade do menu é alternada conforme click), é alterada a visibilidade do menu 
   adicionando um evento de click quando o usuário clicar.

3) Na **TERCEIRA** suite de testes, verifico quando a loadFeed é chamada e se realmente faz sua função, 
usa-se o done, já que a função é assíncrona.

   a)Nesse spec(Entradas iniciais estão presentes), verifico se ha dentro do conteiner
   ao menos algum elemento entry

4) Na **QUARTA** suite de testes criei uma variavel para guardar o conteudo do novo feed carregado 
e capiturado pelo seletor jquery no html. E no spec, verifico que outro foi carregado, comparando
com matcher do jasmine para que nao seja igual ao primeiro
