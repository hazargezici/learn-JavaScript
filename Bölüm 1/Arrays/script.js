let meyveler = ["elma", "armut", "muz", "çilek"];

console.log("dizi " + meyveler.length + " uzunluğundadır");
//ilk ve son eleman
console.log(meyveler[0]);
console.log(meyveler[meyveler.length - 1]);

console.log(meyveler.includes("elma"));

meyveler[meyveler.length] = "kiraz";
meyveler.push("karpuz");

//son iki elemanı silme
// meyveler.pop();
// meyveler.pop();
// //veya
meyveler.splice(meyveler.length - 2, 2);
console.log(meyveler);

let ogrenci1 = ["Yigit", "Bilgi", 2010, [70, 60, 80]];
let ogrenci2 = ["Ada", "Bilgi", 2012, [80, 80, 90]];
let ogrenci3 = ["Ahmet", "Turan", 2009, [60, 60, 70]];

let ogrenciler = [ogrenci1, ogrenci2, ogrenci3];
console.log(ogrenciler);

let yigit_yas = new Date().getFullYear() - ogrenciler[0][2];
let ada_yas = new Date().getFullYear() - ogrenciler[1][2];
let ahmet_yas = new Date().getFullYear() - ogrenciler[2][2];

console.log(yigit_yas);
console.log(ada_yas);
console.log(ahmet_yas);

let yigit_ort =
  (ogrenciler[0][3][0] + ogrenciler[0][3][1] + ogrenciler[0][3][2]) / 3;
let ada_ort =
  (ogrenciler[1][3][0] + ogrenciler[1][3][1] + ogrenciler[1][3][2]) / 3;
let ahmet_ort =
  (ogrenciler[2][3][0] + ogrenciler[2][3][1] + ogrenciler[2][3][2]) / 3;

console.log(yigit_ort.toFixed(1), ada_ort.toFixed(1), ahmet_ort.toFixed(1));
