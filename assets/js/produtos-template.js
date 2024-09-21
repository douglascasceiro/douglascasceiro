
const produtoTemplate = `
<div class="col-produto col-xl-3 col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div id="produtoCard_#INDEX_ARRAY#" class="card card-produto size-card">
        <div class="front front-produto size-card" data-index="#INDEX_ARRAY#" title="Clique para saber mais sobre: #TITULO#">
            <div class="img-card size-card">
                <img src="#IMAGEM_SRC#" alt="#TITULO#">
            </div>
        </div>
        <div class="back back-produto size-card">
            <div class="texto-card size-card">
                <div class="resumo">#RESUMO#</div>
                <div class="ver-mais">
                    <a id="verMaisSobre" href="#" data-index="#INDEX_ARRAY#">Ver mais sobre</a>
                </div>
            </div>
        </div>
    </div>
</div>
`;