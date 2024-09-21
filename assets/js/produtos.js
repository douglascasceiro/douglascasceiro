
function carregarProdutos() {
    lista_produtos.map(function(produto, indexArr) {
        var prodBox = produtoTemplate;
        prodBox = prodBox.replace(/#INDEX_ARRAY#/g, indexArr);
        prodBox = prodBox.replace(/#IMAGEM_SRC#/g, `assets/images/produtos/${produto.imagem}`);
        prodBox = prodBox.replace(/#TITULO#/g, produto.titulo);
        prodBox = prodBox.replace(/#RESUMO#/g, produto.resumo);
        $('#produtos').append(prodBox);

        $(`#produtoCard_${indexArr}`).flip({
            axis: 'y',
            trigger: 'click'
        });

        $(`#produtoCard_${indexArr} .img-card img`).on('load', function() {
            var heightImg = $(`#produtoCard_${indexArr} .img-card img`).height();
            console.log('img heightImg', heightImg);
            $(`#produtoCard_${indexArr} .back .texto-card`).attr('style', `height: ${heightImg}px !important`);
        });

        $(`#produtoCard_${indexArr} .texto-card #verMaisSobre`).on('click', function() {
            var indexArr = $(this).attr('data-index');
            console.log(indexArr);
            console.log(lista_produtos[indexArr]);
            if (typeof lista_produtos[indexArr] !== 'undefined') {
                var prod = lista_produtos[indexArr];
                $('#tituloVerMais').html(`Mais informações sobre ${prod.titulo}`);
                $('#conteudoVerMais').html(prod.texto);
                $('#modalVerMais').modal('show');
            }
        });

    });
}