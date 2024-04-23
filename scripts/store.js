const goodTemplate  = document.querySelector("#good-template").content;
const catalog       = document.querySelector(".catalog-list");

const url       = "https://lerik19.github.io/goods.json";
const devUrl    = "http://localhost:5500/goods.json";

fetch(url)
    .then( response => response.json() )
    .then( data => {
        addGoods(data);
    });


function addGoods (goodDB) {
    for (let good of goodDB) {
        const catalogItem   = goodTemplate.cloneNode(true);
        const goodItem      = catalogItem.querySelector(".good-card");
        const title         = goodItem.querySelector(".title");
        const preview       = goodItem.querySelector(".preview");
        const price         = goodItem.querySelector(".price");
        const oldPrice      = goodItem.querySelector(".old-price");
    
        title.innerHTML     =   good["title"];
        preview.src         +=  good["image"];
        preview.alt         =   good["altText"] ? good["altText"] : "";
        price.innerHTML     =   good["price"] + " руб";
        oldPrice.innerHTML  =   good["oldPrice"] ? good["oldPrice"] + " руб": "";
    
        if (good["sale"])       goodItem.classList.add("sale");
    
        catalog.append(catalogItem);
    }
}
