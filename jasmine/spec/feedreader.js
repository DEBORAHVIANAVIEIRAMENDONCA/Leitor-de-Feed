/* feedreader.js
  TODO: Esse arquivo que o jasmine irá ler para verificar a validação dos testes dentro
dessa função.
  */
$(function () {
    /*TODO: A primeira suite de testes, sua função é testar se os itens do array allFeeds estão definidos ou vazios. Posso ver um erro, caso mude esse array e o torne vazio*/

    describe('RSS Feeds', function () {
        it('are defined', function () {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /*TODO: Esse spec realiza um loop no item URL de allFeeds, usando um forEach e verifica se os itens estão definidos ou nao são 0(vazios).*/
        it('url nao esta vazio', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            })
        })
        /*TODO: Esse spec realiza um loop no item NAME de allFeeds, usando um forEach e verifica se os itens estão definidos ou nao são 0(vazios).*/
        it('name nao esta vazio', function () {
            allFeeds.forEach(function (feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            })
        })

    });

    /*TODO: Verifico no primeiro spec se a classe body, contém um menu-hidden.*/
    describe('Menu', function () {
        it('Menu escondido por padrão', function () {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })
    /*Aqui é alterada a visibilidade do menu adicionando um evento de click quando o usuário clicar. */
        it('A visibilidade do menu é alternada conforme click', function () {
            $('.icon-list').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.icon-list').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })
    })

    /*TODO: Nessa suite, verifico quando a loadFeed é chamada e se realmente faz sua função usando o done, já que a função é assincrona*/
    describe('Entradas iniciais', function () {
        beforeEach(function (done) {
            loadFeed(0, done); 
        })
        //Nesse spec, verifico se ha dentro do conteiner ao menos algum elemento entry.
        it('Entradas iniciais estão presentes', function () {
            expect($('.feed .entry').length).toBeGreaterThan(0)
        })
    })
   
    /*TODO: Nessa suite criei uma variavel para guardar o conteudo do novo feed carregado e  capiturado pelo seletor jquery no html. E no spec, verifico que outro foi carregado, comparando
com matcher do jasmine para que nao seja igual ao primeiro*/
    describe('Nova seleção de Feed', function () {
        var primeiroFeed;
        beforeEach(function (done) {
            loadFeed(0, function () {
                primeiroFeed = $('.feed').html()
                loadFeed(1, done);
            })
        })
        it('Feed diferente do outro', function () {
            expect($('.feed').html()).not.toBe(primeiroFeed);

        })

    })

});