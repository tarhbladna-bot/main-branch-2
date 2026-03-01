/* =========================
   CONFIG
========================= */
const CONFIG = {
  phones: {
    sales: "01126773698",
    contact: "01020508423"
  },
  email: "tarhbladna@gmail.com",
  address: {
    ar: "أبورواش – الجيزة – مصر",
    en: "Abu Rawash – Giza – Egypt",
    tr: "Abu Rawash – Giza – Mısır"
  },
  banner: "banner.png",
  messenger: "https://m.me/",
  whatsapp: "https://wa.me/201126773698",
  facebook: "https://www.facebook.com/share/14b1DZ65PCg/",
  instagram: "https://www.instagram.com/efyos820?igsh=MXhxam40dGpweW12ag==",

  // Visitor counter (CountAPI) - global counter
  // Docs style: hit endpoint increments by 1 and returns value. :contentReference[oaicite:1]{index=1}
  counter: {
    namespace: "tarhbladna-bot",
    key: "tarehbaldna_visits"
  },

  products: [
    { id:"p1", cat:"shell",  ar:"فول بقشره",               en:"Peanuts in Shell",              tr:"Kabuklu Yer Fıstığı" },
    { id:"p2", cat:"shelled",ar:"فول مقشر",                en:"Shelled Peanuts",               tr:"Kabuksuz Yer Fıstığı" },
    { id:"p3", cat:"halawany",ar:"فول حلواني أنصاص",       en:"Confectionery Peanuts (Halves)",tr:"Şekerleme Tipi (Yarım)" },
    { id:"p4", cat:"crushed",ar:"فول مجروش",               en:"Crushed Peanuts",               tr:"Kırık Yer Fıstığı" },
    { id:"p5", cat:"manufacturing",ar:"فول لشغل الطعوم والشيكولاتة", en:"For Coating & Chocolate", tr:"Çikolata & Kaplama İçin" },
    { id:"p6", cat:"manufacturing",ar:"فول بيور لعمل زبدة الفول",    en:"Pure for Peanut Butter",   tr:"Fıstık Ezmesi İçin Saf" },
  ],
  imagesPerProduct: 8,
  imageExt: "jpg",
};

/* =========================
   I18N
========================= */
const I18N = {
  ar: {
    brandName: "شركة طرح بلدنا للمحاصيل الزراعية",
    brandSub: "أبويوسف للتجارة والتصنيع",
    sales: "المبيعات",
    whatsApp: "واتساب",
    kicker: "توريد محلي • تصدير عالمي",
    heroTitle: "فول سوداني",
    heroTitle2: "بمواصفات مصانع",
    heroTitle3: "— جودة مضمونة",
    heroDesc: "تصنيع وتجهيز وتوريد شكاير 50/25 كجم، وعبوات فاكيوم داخل كرتونة 10 كجم. توريد لجميع محافظات مصر وتصدير لأي مكان في العالم. السعر عند الطلب.",
    ctaProducts: "شاهد المنتجات",
    ctaQuick: "تواصل سريع",
    location: "أبورواش – الجيزة – مصر",
    delivery: "سرعة توصيل",
    export: "تصدير لأي مكان في العالم",
    quickTitle: "التعبئة والتجهيز",
    pack1: "شكاير 50 كجم و25 كجم",
    pack2: "فاكيوم عبوات داخل كرتونة 10 كجم",
    pack3: "تجهيز حسب طلب العميل",
    priceNote: "السعر عند الطلب",
    whyTitle: "لماذا نحن؟",
    whyDesc: "خبرة وجودة وتسعير وتوصيل… بمعايير شركات كبيرة لخدمة السوق المحلي والتصدير.",
    w1t: "خبرة طويلة", w1d: "خبرة كبيرة في تجارة وتصنيع الفول السوداني والمفروك والتعامل مع المصانع والشركات.",
    w2t: "جودة مضمونة", w2d: "فرز وتجهيز وتعبئة بمعايير دقيقة لضمان منتج نظيف ومطابق للمواصفات.",
    w3t: "أسعار تنافسية", w3d: "أفضل قيمة مقابل الجودة مع مرونة في الكميات والتعاقدات (السعر عند الطلب).",
    w4t: "سرعة توصيل", w4d: "التزام بمواعيد التسليم داخل مصر وتجهيز سريع لطلبات التصدير لأي مكان في العالم.",
    prodTitle: "المنتجات",
    prodDesc: "تصفح المنتجات بالبحث والفلترة — اضغط على أي صورة للتكبير.",
    searchPh: "ابحث داخل المنتجات…",
    filterAll: "الكل",
    filterShell:"بقشرة",
    filterShelled:"مقشر",
    filterHalawany:"حلواني",
    filterCrushed:"مجروش",
    filterMan:"تصنيع",
    add:"إضافة للسلة",
    cart:"السلة",
    empty:"تفريغ السلة",
    send:"إرسال الطلب",
    total:"الإجمالي",
    sendNote:"إرسال الطلب يتم على واتساب برسالة جاهزة.",
    reviewsTitle:"آراء العملاء",
    reviewsDesc:"شكرًا لعملائنا على الثقة — دي بعض الآراء بعد التعامل مع شركة طرح بلدنا.",
    contactTitle:"التواصل",
    contactDesc:"للطلبات المحلية والتصدير — السعر عند الطلب.",
    contact:"تواصل",
    email:"البريد",
    services:"خدماتنا",
    s1:"تصنيع • تجهيز • توريد",
    s2:"توريد لجميع محافظات مصر",
    s3:"تصدير لأي مكان في العالم",
    s4:"شكاير 50/25 كجم + فاكيوم 10 كجم",
    footer:"تصنيع • تجهيز • توريد • تصدير | السعر عند الطلب",
    visits:"عداد الزوار",
    statsProducts:"منتجات",
    statsSupport:"تواصل",
    statsSupportVal:"24/7",
    quick:"تواصل سريع"
  },
  en: {
    brandName: "Tarh Bledna Agricultural Crops Company",
    brandSub: "Abu Youssef – Trading & Manufacturing",
    sales: "Sales",
    whatsApp: "WhatsApp",
    kicker: "Local Supply • Worldwide Export",
    heroTitle: "Premium Peanuts",
    heroTitle2: "Factory-Grade Specs",
    heroTitle3: "— Guaranteed Quality",
    heroDesc: "Processing, packing, and supplying 50/25 kg bags and vacuum packs in 10 kg cartons. Nationwide delivery across Egypt and worldwide export. Price upon request.",
    ctaProducts: "View Products",
    ctaQuick: "Quick Contact",
    location: "Abu Rawash – Giza – Egypt",
    delivery: "Fast Delivery",
    export: "Worldwide Export",
    quickTitle: "Packaging & Processing",
    pack1: "50 kg & 25 kg bags",
    pack2: "Vacuum packs in 10 kg cartons",
    pack3: "Custom packing upon request",
    priceNote: "Price upon request",
    whyTitle: "Why Choose Us?",
    whyDesc: "Experience, quality, competitive pricing, and reliable delivery — corporate standards for local & export markets.",
    w1t: "Long Experience", w1d: "Strong experience in peanut trading & processing for factories and companies.",
    w2t: "Guaranteed Quality", w2d: "Strict sorting, processing, and packaging standards for premium-grade products.",
    w3t: "Competitive Prices", w3d: "Best value with flexible quantities and contracts (price upon request).",
    w4t: "Fast Delivery", w4d: "On-time delivery across Egypt and fast export readiness worldwide.",
    prodTitle: "Products",
    prodDesc: "Browse with instant search & filters — click any image to zoom.",
    searchPh: "Search products…",
    filterAll: "All",
    filterShell:"In Shell",
    filterShelled:"Shelled",
    filterHalawany:"Confectionery",
    filterCrushed:"Crushed",
    filterMan:"Manufacturing",
    add:"Add to Cart",
    cart:"Cart",
    empty:"Clear Cart",
    send:"Send Order",
    total:"Total",
    sendNote:"Order will be sent to WhatsApp as a ready message.",
    reviewsTitle:"Customer Reviews",
    reviewsDesc:"Thanks for your trust — a few reviews after dealing with Tarh Bledna.",
    contactTitle:"Contact",
    contactDesc:"Local orders and export — price upon request.",
    contact:"Contact",
    email:"Email",
    services:"Our Services",
    s1:"Processing • Packaging • Supply",
    s2:"Delivery across all Egypt governorates",
    s3:"Worldwide export",
    s4:"50/25 kg bags + 10 kg vacuum cartons",
    footer:"Processing • Packaging • Supply • Export | Price upon request",
    visits:"Visitor Counter",
    statsProducts:"Products",
    statsSupport:"Support",
    statsSupportVal:"24/7",
    quick:"Quick Contact"
  },
  tr: {
    brandName: "Tarh Bledna Tarımsal Ürünler Şirketi",
    brandSub: "Abu Youssef – Ticaret & Üretim",
    sales: "Satış",
    whatsApp: "WhatsApp",
    kicker: "Yerli Tedarik • Dünya Çapında İhracat",
    heroTitle: "Kaliteli Yer Fıstığı",
    heroTitle2: "Fabrika Standartlarında",
    heroTitle3: "— Garantili Kalite",
    heroDesc: "50/25 kg çuvallar ve 10 kg kolide vakumlu ambalaj. Mısır geneli teslimat ve tüm dünyaya ihracat. Fiyat teklifi ile.",
    ctaProducts: "Ürünleri Gör",
    ctaQuick: "Hızlı İletişim",
    location: "Abu Rawash – Giza – Mısır",
    delivery: "Hızlı Teslimat",
    export: "Dünya Çapında İhracat",
    quickTitle: "Ambalaj & İşleme",
    pack1: "50 kg & 25 kg çuvallar",
    pack2: "10 kg kolide vakumlu ambalaj",
    pack3: "Talebe göre özel ambalaj",
    priceNote: "Fiyat teklifi ile",
    whyTitle: "Neden Biz?",
    whyDesc: "Tecrübe, kalite, rekabetçi fiyat ve güvenilir teslimat.",
    w1t: "Uzun Tecrübe", w1d: "Fabrika ve şirketlere yönelik güçlü tecrübe.",
    w2t: "Garantili Kalite", w2d: "Sıkı eleme, işleme ve paketleme standartları.",
    w3t: "Rekabetçi Fiyat", w3d: "Esnek miktar ve anlaşmalar (fiyat teklifi ile).",
    w4t: "Hızlı Teslimat", w4d: "Zamanında teslimat ve hızlı ihracata hazırlık.",
    prodTitle: "Ürünler",
    prodDesc: "Anında arama ve filtre — büyütmek için resme tıkla.",
    searchPh: "Ürün ara…",
    filterAll: "Hepsi",
    filterShell:"Kabuklu",
    filterShelled:"Kabuksuz",
    filterHalawany:"Şekerleme",
    filterCrushed:"Kırık",
    filterMan:"Üretim",
    add:"Sepete Ekle",
    cart:"Sepet",
    empty:"Sepeti Boşalt",
    send:"Siparişi Gönder",
    total:"Toplam",
    sendNote:"Sipariş WhatsApp’a hazır mesaj olarak gönderilir.",
    reviewsTitle:"Müşteri Yorumları",
    reviewsDesc:"Güveniniz için teşekkürler — bazı yorumlar.",
    contactTitle:"İletişim",
    contactDesc:"Yerli sipariş ve ihracat — fiyat teklifi ile.",
    contact:"İletişim",
    email:"E-posta",
    services:"Hizmetlerimiz",
    s1:"İşleme • Ambalaj • Tedarik",
    s2:"Mısır genelinde teslimat",
    s3:"Dünya çapında ihracat",
    s4:"50/25 kg çuval + 10 kg vakum kolisi",
    footer:"İşleme • Ambalaj • Tedarik • İhracat | Fiyat teklifi ile",
    visits:"Ziyaret Sayacı",
    statsProducts:"Ürün",
    statsSupport:"Destek",
    statsSupportVal:"24/7",
    quick:"Hızlı İletişim"
  }
};

/* =========================
   Helpers
========================= */
const $ = (q,root=document)=>root.querySelector(q);
const $$ = (q,root=document)=>[...root.querySelectorAll(q)];

let lang = "ar";
let cart = JSON.parse(localStorage.getItem("tb_cart") || "{}"); // {p1: qty,...}

function t(key){
  return (I18N[lang] && I18N[lang][key]) ? I18N[lang][key] : (I18N.ar[key] || key);
}
function setDir(){
  const rtl = (lang==="ar");
  document.documentElement.lang = lang;
  document.documentElement.dir = rtl ? "rtl" : "ltr";
  document.body.style.fontFamily = rtl
    ? '"Cairo","Inter",system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif'
    : '"Inter","Cairo",system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif';
}
function saveCart(){
  localStorage.setItem("tb_cart", JSON.stringify(cart));
  updateCartUI();
}
function cartCount(){
  return Object.values(cart).reduce((a,b)=>a+b,0);
}
function productName(p){
  return (lang==="ar"?p.ar:(lang==="tr"?p.tr:p.en));
}
function productImages(pId){
  const arr=[];
  for(let i=1;i<=CONFIG.imagesPerProduct;i++){
    arr.push(`products/${pId}/${i}.${CONFIG.imageExt}`);
  }
  return arr;
}

/* =========================
   Build Products
========================= */
function buildProducts(){
  const grid = $("#productsGrid");
  if(!grid) return;

  grid.innerHTML = "";
  CONFIG.products.forEach(p=>{
    const el = document.createElement("article");
    el.className = "prod";
    el.dataset.pid = p.id;
    el.dataset.cat = p.cat;

    const imgs = productImages(p.id);
    const shots = imgs.map((src,idx)=>`
      <div class="shot">
        <img loading="lazy" src="${src}" alt="${productName(p)} ${idx+1}">
        <button type="button" aria-label="zoom" data-zoom="${src}"></button>
      </div>
    `).join("");

    const qtyVal = cart[p.id] || 0;

    el.innerHTML = `
      <div class="prodTop">
        <h3 class="prodTitle">${productName(p)}</h3>
        <p class="prodSub">${t("priceNote")}</p>
        <span class="price">ⓘ <span>${t("priceNote")}</span></span>
      </div>

      <div class="gallery">${shots}</div>

      <div class="cartRow">
        <div class="qty">
          <button class="qbtn" type="button" data-minus="${p.id}">−</button>
          <span id="qty_${p.id}">${qtyVal}</span>
          <button class="qbtn" type="button" data-plus="${p.id}">+</button>
        </div>
        <button class="addBtn" type="button" data-add="${p.id}">${t("add")}</button>
      </div>
    `;
    grid.appendChild(el);
  });
}

/* =========================
   Filters & Search
========================= */
function applyFilter(){
  const q = ($("#searchInput")?.value || "").trim().toLowerCase();
  const cat = $(".chip.active")?.dataset.cat || "all";

  $$(".prod").forEach(card=>{
    const pid = card.dataset.pid;
    const p = CONFIG.products.find(x=>x.id===pid);
    const name = (p ? (p.ar+" "+p.en+" "+p.tr) : "").toLowerCase();
    const okQ = !q || name.includes(q);
    const okC = (cat==="all") || (card.dataset.cat===cat);
    card.style.display = (okQ && okC) ? "" : "none";
  });
}

/* =========================
   Lightbox
========================= */
function openLightbox(src){
  $("#lightboxImg").src = src;
  $("#lightbox").classList.add("show");
}
function closeLightbox(){
  $("#lightbox").classList.remove("show");
  $("#lightboxImg").src = "";
}

/* =========================
   Cart Drawer
========================= */
function toggleDrawer(show){
  $("#drawer").classList.toggle("show", show);
  $("#drawerBackdrop").classList.toggle("show", show);
}
function updateCartUI(){
  $("#cartCount").textContent = cartCount();
  $("#cartCountTop").textContent = cartCount();

  const list = $("#cartList");
  const total = $("#cartTotal");

  if(!list || !total) return;

  list.innerHTML = "";
  let sum = 0;

  Object.entries(cart).forEach(([pid,qty])=>{
    if(qty<=0) return;
    const p = CONFIG.products.find(x=>x.id===pid);
    if(!p) return;
    sum += qty;

    const row = document.createElement("div");
    row.className = "cartItem";
    row.innerHTML = `
      <div class="cartItemTop">
        <div class="cartItemName">${productName(p)}</div>
        <div class="qty">
          <button class="qbtn" type="button" data-cartminus="${pid}">−</button>
          <span>${qty}</span>
          <button class="qbtn" type="button" data-cartplus="${pid}">+</button>
        </div>
      </div>
    `;
    list.appendChild(row);
  });

  total.textContent = String(sum);
}
function clearCart(){
  cart = {};
  saveCart();
}
function sendWhatsApp(){
  const lines = [];
  lines.push(`طلب من موقع: ${location.href}`);
  lines.push(`—`);
  Object.entries(cart).forEach(([pid,qty])=>{
    if(qty<=0) return;
    const p = CONFIG.products.find(x=>x.id===pid);
    if(!p) return;
    lines.push(`${productName(p)} × ${qty}`);
  });
  lines.push(`—`);
  lines.push(`الاسم/الشركة: ${t("brandName")} - ${t("brandSub")}`);
  lines.push(`هاتف: ${CONFIG.phones.sales} / ${CONFIG.phones.contact}`);
  lines.push(`البريد: ${CONFIG.email}`);

  const msg = encodeURIComponent(lines.join("\n"));
  window.open(`${CONFIG.whatsapp}?text=${msg}`, "_blank");
}

/* =========================
   Visitor Counter (CountAPI)
========================= */
async function updateCounter(){
  const el = $("#visitCount");
  if(!el) return;

  // CountAPI hit endpoint increments and returns the value. :contentReference[oaicite:2]{index=2}
  const url = `https://api.countapi.xyz/hit/${encodeURIComponent(CONFIG.counter.namespace)}/${encodeURIComponent(CONFIG.counter.key)}`;
  try{
    const res = await fetch(url);
    const data = await res.json();
    if(typeof data.value === "number") el.textContent = data.value.toLocaleString();
    else el.textContent = "—";
  }catch(e){
    el.textContent = "—";
  }
}

/* =========================
   Apply Language
========================= */
function applyLang(newLang){
  lang = newLang;
  setDir();

  $$("[data-i18n]").forEach(el=>{
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  // update dynamic address badge
  $("#addrBadge").textContent = CONFIG.address[lang] || CONFIG.address.ar;

  // active buttons
  $$(".lang button").forEach(b=>b.classList.toggle("active", b.dataset.lang===lang));

  // rebuild products (names change with language)
  buildProducts();
  bindDynamicEvents();
  applyFilter();
  updateCartUI();
}

/* =========================
   Bind Events
========================= */
function bindStaticEvents(){
  // language
  $$(".lang button").forEach(btn=>{
    btn.addEventListener("click", ()=> applyLang(btn.dataset.lang));
  });

  // search
  $("#searchInput")?.addEventListener("input", applyFilter);

  // filter chips
  $$(".chip").forEach(ch=>{
    ch.addEventListener("click", ()=>{
      $$(".chip").forEach(x=>x.classList.remove("active"));
      ch.classList.add("active");
      applyFilter();
    });
  });

  // drawer
  $("#openCartBtn")?.addEventListener("click", ()=> toggleDrawer(true));
  $("#drawerBackdrop")?.addEventListener("click", ()=> toggleDrawer(false));
  $("#closeDrawer")?.addEventListener("click", ()=> toggleDrawer(false));

  // lightbox
  $("#lightboxClose")?.addEventListener("click", closeLightbox);
  $("#lightbox")?.addEventListener("click", (e)=>{
    if(e.target.id==="lightbox") closeLightbox();
  });
  window.addEventListener("keydown",(e)=>{
    if(e.key==="Escape"){ closeLightbox(); toggleDrawer(false); }
  });

  // cart actions
  $("#clearCartBtn")?.addEventListener("click", clearCart);
  $("#sendCartBtn")?.addEventListener("click", sendWhatsApp);

  // toTop
  const toTop = $("#toTop");
  window.addEventListener("scroll", ()=>{
    if(window.scrollY > 700) toTop?.classList.add("show");
    else toTop?.classList.remove("show");
  });
}

function bindDynamicEvents(){
  // zoom buttons
  $$("[data-zoom]").forEach(btn=>{
    btn.addEventListener("click", ()=> openLightbox(btn.dataset.zoom));
  });

  // qty plus/minus on cards
  $$("[data-plus]").forEach(b=>{
    b.addEventListener("click", ()=>{
      const pid = b.dataset.plus;
      cart[pid] = (cart[pid]||0) + 1;
      $(`#qty_${pid}`).textContent = cart[pid];
      saveCart();
    });
  });
  $$("[data-minus]").forEach(b=>{
    b.addEventListener("click", ()=>{
      const pid = b.dataset.minus;
      cart[pid] = Math.max(0, (cart[pid]||0) - 1);
      $(`#qty_${pid}`).textContent = cart[pid];
      if(cart[pid]===0) delete cart[pid];
      saveCart();
    });
  });

  // add button (just ensures not 0)
  $$("[data-add]").forEach(b=>{
    b.addEventListener("click", ()=>{
      const pid = b.dataset.add;
      cart[pid] = Math.max(1, (cart[pid]||0));
      $(`#qty_${pid}`).textContent = cart[pid];
      saveCart();
      toggleDrawer(true);
    });
  });

  // cart drawer +/- 
  $$("[data-cartplus]").forEach(b=>{
    b.addEventListener("click", ()=>{
      const pid = b.dataset.cartplus;
      cart[pid] = (cart[pid]||0)+1;
      saveCart();
    });
  });
  $$("[data-cartminus]").forEach(b=>{
    b.addEventListener("click", ()=>{
      const pid = b.dataset.cartminus;
      cart[pid] = Math.max(0,(cart[pid]||0)-1);
      if(cart[pid]===0) delete cart[pid];
      saveCart();
    });
  });
}

/* =========================
   Init
========================= */
function init(){
  // year
  $("#year").textContent = new Date().getFullYear();

  // links
  $("#waTop").href = CONFIG.whatsapp;
  $("#waBtn").href = CONFIG.whatsapp;
  $("#fbBtn").href = CONFIG.facebook;
  $("#igBtn").href = CONFIG.instagram;
  $("#msBtn").href = CONFIG.messenger;
  $("#msFab").href = CONFIG.messenger;
  $("#emailFab").href = `mailto:${CONFIG.email}`;

  // phones
  $("#salesTop").href = `tel:${CONFIG.phones.sales}`;
  $("#salesBottom").href = `tel:${CONFIG.phones.sales}`;
  $("#contactBottom").href = `tel:${CONFIG.phones.contact}`;

  // banner
  $("#heroBannerImg").src = CONFIG.banner;

  // build
  buildProducts();

  // bind
  bindStaticEvents();
  bindDynamicEvents();

  // set default language
  applyLang("ar");

  // counter
  updateCounter();

  // cart ui
  updateCartUI();
}

document.addEventListener("DOMContentLoaded", init);
