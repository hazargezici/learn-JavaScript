let url = "https://google.com/";
let kursAdi = "Hazar Gezici Web Eğitimi";
let sonuc;
sonuc = url.length;
console.log("url " + sonuc + " karakterlidir");

sonuc = kursAdi.split(" ").length;
console.log("kursAdi " + sonuc + " kelimeden oluşuyor");

sonuc = url.startsWith("https");
if (sonuc) {
  console.log("https ile başlıyor");
} else {
  console.log("https ile başlamıyor");
}

sonuc=kursAdi.includes("Web")
if (sonuc) {
    console.log("web kelimesini içeriyor");
  } else {
    console.log("web kelimesini içermiyor");
  }
sonuc=url+kursAdi.toLowerCase().replaceAll(" ","-");
console.log(sonuc);
