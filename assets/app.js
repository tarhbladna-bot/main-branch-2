const IMG_EXT = "jpg";

const PRODUCTS = [
  { id:"p1", name:"فول بقشره" },
  { id:"p2", name:"فول مقشر" },
  { id:"p3", name:"فول حلواني أنصاص" },
  { id:"p4", name:"فول مجروش" },
  { id:"p5", name:"فول لشغل الطعوم والشيكولاتة" },
  { id:"p6", name:"فول بيور لعمل زبدة الفول" }
];

const container = document.querySelector(".products-container");

function createProducts(){
  PRODUCTS.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    let imagesHTML = "";

    for(let i=1; i<=8; i++){
      imagesHTML += `
        <div class="product-img">
          <img loading="lazy" src="products/${product.id}/${i}.${IMG_EXT}" alt="${product.name}">
        </div>
      `;
    }

    card.innerHTML = `
      <h3>${product.name}</h3>
      <div class="product-gallery">
        ${imagesHTML}
      </div>
    `;

    container.appendChild(card);
  });
}

createProducts();
