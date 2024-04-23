let goodDB = [
    {
        title: "Кружка",
        image: "good-1.jpg",
        altText: "Кружка",
        price: 999,
        sale: true,
        oldPrice: 2000,
    },
    {
        title: "Чёрная футболка",
        image: "good-2.jpg",
        altText: "Чёрная футболка",
        price: 1499,
    },
    {
        title: "Синяя толстовка",
        image: "good-3.jpg",
        altText: "Синяя толстовка",
        price: 2499,
    },
];


const goodTemplate  = document.querySelector("#good-template").content;
const catalog       = document.querySelector(".catalog-list");

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
