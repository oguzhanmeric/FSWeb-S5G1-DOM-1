const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */

//Header Bölümü:
document.getElementById("logo-img").src = siteContent.images["logo-img"];
const linker = document.querySelectorAll("nav a");
linker.forEach((item, index)=> {
  item.className ="italic";
  item.textContent = siteContent.nav["nav-item-" + (index+1)];
});

//Section-1:
document.querySelector("h1").textContent = siteContent.cta.h1;
document.querySelector("button").textContent = siteContent.cta.button;
document.getElementById("cta-img").src = siteContent.images["cta-img"];

//Section-2:
const mainTextContent = document.querySelectorAll('.text-content');

let index = 0;
for (let i =0; i<mainTextContent.length;i++){
  mainTextContent[i].children[0].textContent=Object.values(siteContent["ana-içerik"])[index];
  index+=1
  mainTextContent[i].children[1].textContent=Object.values(siteContent["ana-içerik"])[index];
  index+=1
}

document.getElementById("middle-img").src = siteContent.images["accent-img"];


// const contentHead = document.querySelectorAll("h4");
// contentHead[0].textContent = siteContent["ana-içerik"]["özellikler-h4"];
// contentHead[1].textContent = siteContent["ana-içerik"]["hakkımızda-h4"];
// contentHead[2].textContent = siteContent["ana-içerik"]["servisler-h4"];
// contentHead[3].textContent = siteContent["ana-içerik"]["ürünler-h4"];
// contentHead[4].textContent = siteContent["ana-içerik"]["vizyon-h4"];

// document.getElementById("middle-img").src = siteContent.images["accent-img"];

// const contentText = document.querySelectorAll(".text-content p");
// contentText[0].textContent = siteContent["ana-içerik"]["özellikler-içerik"];
// contentText[1].textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];
// contentText[2].textContent = siteContent["ana-içerik"]["servisler-içeriği"];
// contentText[3].textContent = siteContent["ana-içerik"]["ürünler-içeriği"];
// contentText[4].textContent = siteContent["ana-içerik"]["vizyon-içeriği"];

//Section-3:

document.querySelector(".contact h4").textContent = siteContent.iletisim["iletişim-h4"]

const contactP = document.querySelectorAll(".contact p")
contactP[0].textContent = siteContent.iletisim.adres;
contactP[1].textContent = siteContent.iletisim.telefon;
contactP[2].textContent = siteContent.iletisim.email;

//Footer:
const footerDOM = document.querySelector("footer a");
footerDOM.className = "bold";
footerDOM.textContent = siteContent.footer.copyright;