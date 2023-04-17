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

document.querySelectorAll("a")[0].textContent = "Servisler";
document.querySelectorAll("a")[1].textContent = "Ürünler";
document.querySelectorAll("a")[2].textContent = "Vizyon";
document.querySelectorAll("a")[3].textContent = "Özellikler";
document.querySelectorAll("a")[4].textContent = "Hakkımızda";
document.querySelectorAll("a")[5].textContent = "İletişim";

const linker = document.querySelectorAll("header nav a");
linker.forEach(i => { i.classList.add("italic")});



const logoImg=document.getElementById("logo-img");
logoImg.src = "http://localhost:9000/img/logo.png";

document.querySelector(".cta-text h1").textContent ="Bu DOM Mükemmel";
document.querySelector(".cta-text button").textContent ="Başlayın";

document.getElementById("cta-img").setAttribute("src","http://localhost:9000/img/cta.png");

const textH4=document.querySelectorAll(".text-content h4");
const textP=document.querySelectorAll(".text-content p"); 

textH4[0].textContent="Özellikler";
textP[0].textContent="Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metusscelerisque quis.";

textH4[1].textContent="Hakkında";
textP[1].textContent="Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

textH4[2].textContent="Servisler";
textP[2].textContent="Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

textH4[3].textContent="Ürünler";
textP[3].textContent= "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

textH4[4].textContent="Vizyon";
textP[4].textContent="Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."

document.getElementById("middle-img").setAttribute("src","http://localhost:9000/img/accent.png");

document.querySelector(".contact h4").textContent ="İletişim";
const contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";
contactP[1].textContent ="+90 (123) 456-7899";
contactP[2].textContent ="satis@birsirketsitesi.com.tr";

const footer = document.querySelector("footer a");
footer.textContent="Copyright Bir Şirket Sitesi 2022";
footer.classList.add("bold");