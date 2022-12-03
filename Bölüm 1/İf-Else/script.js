// 1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.

let sayi = 25;

if (sayi >= 10 && sayi <= 50) {
  console.log("Sayi 10 ile 50 arasındadır");
} else {
  console.log("Sayi 10 ile 50 arasında değildir.");
}

// 2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.

if (sayi > 0 && sayi % 2 == 1) {
  console.log("Sayi pozitif tek sayıdır");
} else {
  console.log("Sayi pozitif tek sayı değildir");
  
}

// 3-x,y,zsayılarının büyüklük karşılaştırmasını yapınız.(else if'iaraştırınız.)

let x = 10,
  y = 20,
  z = 30;
if (x > y && x > z) {
  console.log("x en büyük");
} else if (y > x && y > z) {
  console.log("y en büyük");
} else if (z > x && z > y) {
  console.log("z en büyük");
} else {
  console.log("sayılar eşit");
}

// 4- 2 vize(40%) ve 1 final (%60) notuna göre hesaplanan ortalama için;
// a- Eğer ortalama 50 ve üstündeyse geçti değilse kaldı yazsın.
// b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
// c- Finalden 70 alındığında ortalama 50'nin altında olsa bile dersten geçilsin

let vize1 = 0,vize2=20
  final = 60;

let ortalama = ((vize1+vize2)/2)*0.4+ final*0.6;
console.log("ortalamanız:"+ortalama);
if (ortalama >= 50 && final >= 50) {
  console.log("geçti");
} else if (final >= 70) {
  console.log("geçti");
} else {
  console.log("kaldı");
}
