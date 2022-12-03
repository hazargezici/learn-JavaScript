function tekrarlama(kelime, adet) {
  for (let i = 0; i < adet; i++) {
    console.log(kelime);
  }
}
tekrarlama("Hazar", 3);

function dikdortgenHesaplama(uzun_kenar, kisa_kenar) {
  let alan = uzun_kenar * kisa_kenar;
  let cevre = 2 * (uzun_kenar + kisa_kenar);
  console.log(`Dikdortgenin alani ${alan} cevresi ${cevre}`);
}
dikdortgenHesaplama(5, 25);

function yaziTuraAt() {
  let random = Math.random(); //0-1 arasında;
  if (random > 0.5) {
    console.log("Yazı");
  } else {
    console.log("Tura");
  }
}
yaziTuraAt();

function tamBolen(sayi) {
  let list = [];
  for (let i = 1; i <= sayi; i++) {
    if (sayi % i == 0) {
      list.push(i);
    }
  }
  return list;
}
console.log(tamBolen(18));

function toplam() {
  let sonuc = 0;
  for (let i = 0; i < arguments.length; i++) {
    sonuc += arguments[i];
  }
  return sonuc;
}
console.log("sayilarin toplami: " + toplam(4, 5));
console.log("sayilarin toplami: " + toplam(34, 23, 45));
