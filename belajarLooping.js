/*
    ada beberapa algoritma yang dapat digunakan untuk melakukan looping, diantaranya
    1. for, for in, for of, foreach
    2. while, do-while
    

*/

const datas = [
  {
    nama: "fajar abdillah ahmad",
    kelas: "5b",
  },
  {
    nama: "ujeh nurdin",
    kelas: "5c",
  },
  {
    nama: "jundun manjun",
    kelas: "5a",
  },
];

const arrayOri = ["kambing", "kucing", "ayam", "kelinci"];

// contoh dengan macam2 for
console.log("====== LOOP FOR =====");
// for
for (let i = 1; i <= 10; i++) {
  // kondisi 1 : inisial variabel awal(hanya sekali diawal sebelum perulangan), kondisi 2 : inisial batas looping(jika true dieksekusi), kondisi 3 post statement(selalu diakhir)
  console.log("data ke - " + i); //ini akan selalu diulang sampai kondisi 2 tidak terpenuhi
}

// for in
console.log("====== LOOP FOR IN =====");
for (list in datas) {
  console.log(list); // kita meloping variabel diatas dengan nilai index
}

// for of
console.log("====== LOOP FOR OF =====");
for (listOri of arrayOri) {
  console.log(listOri); // kita meloping variabel diatas dengan nilai arraynya atau datanya bukan INDEXNYA
}

// foreach & Map
//foreach
console.log("====== LOOP FOREACH =====");
arrayOri.forEach((value, index) => {
  // value adalah variabel baru sebagai tempat nilai array , dan index adalah index array
  console.log(value, index); // kita juda bisa memasukan indexnya
});

//Map
console.log("====== LOOP MAP =====");
arrayOri.map((values, index) => {
  console.log(values);
});

//CONTOH DENGAN WHILE, DO-WHILE (lebih sederhana)
// while
console.log("====== LOOP WHILE =====");
let i = 1;
while (i <= 10) {//while hanya menggunakan kondisinya saja tanpa init dan post
  console.log("data ke - " + i);
  i++; // harus kita incerement di akhir karna jika tidak nilai akan selalu true dan akan mengakibatkan infinite loop
}

// do-while(biasanya digunakan untuk menampil menu)
let x = 1;
do {
  console.log("welcome to do while - " + x); // setidaknya akan dieksekusi sekali dulu lalu akan mengecek statment sampe batas while
  x++;
} while (x <= 5);//bedanya dengan while adalah kalo ini pengecekannya diakhir


