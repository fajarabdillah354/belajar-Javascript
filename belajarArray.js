/*
    array adalah adalah suatu algoritma yang dapat digunakan untuk menampung banyak nilai atau multiple value
    
    ketika variabel punya value yang banyak mmau diapakan, itu adalah pertanyaannya



*/

// const arrayBuah = new Array(['🍌', '🍊', '🍎']) ini contoh yang menggunakan object

const arrayBuah = ["🍌", "🍊", "🍎", "🍇", "🍈"];

// untuk mengecek apakah data di array sesuai
const dataArray = arrayBuah.includes("🍌");
console.log(arrayBuah);
console.log(dataArray);

//untuk mengetahui index awal
const indexAwal = arrayBuah.shift();
console.log("buah pertama adalah " + indexAwal);

//untuk mengetahui index akhir
const indexAkhir = arrayBuah.pop();
console.log("buah terakhir adalah " + indexAkhir);

// memasukan index manual
const buah = [];
buah[0] = "🍇";
buah[4] = "🍊"; // karna kita langsung lompat ke index-4 maka 1,2,3 itu nilainya undefined atau empty

console.log(buah);

//contoh index dengan string
const arrayString = [];
arrayString["nama1"] = "fajar abdillah ahmad";
arrayString["nama2"] = "jujun pajudan";
arrayString["nama3"] = "eleh meleleh";

console.log(arrayString.length); // maka ini akan bernilai 0 karna nilai yang kita beri String bukan number
console.log(arrayString[1]); //jika isi index String kita tidak boleh memanggilnya dengan number, maka hasilnya akan undefined
console.log(arrayString["nama3"]); //yang bener seperti ini jika kita ingin mendapatkan nilai isi arraynya

// studi kasus : jika kita diminta mengolah data array tetapi data original tidak boleh dirubah

const arrayOri = ["kambing", "kucing", "ayam", "kelinci"];

const arraySaya = arrayOri; //jika seperti ini ketika mengubah arraySaya maka ori akan berubah juga sementara syarat tidak boleh berubah

arraySaya[0] = "tikus kantor";

// console.log(arrayOri) //nilai arrayOri tidak boleh berubah
// console.log(arraySaya)

// untuk mengatasi ini kita bisa menggunakan beberapa cara seperti slice(), JSON.parse(stringfy('namaArray')), atau menggunaka operator ...'arrayName'

const arraySaya2 = arrayOri.slice();
arraySaya2[4] = "kukus";
arraySaya2[5] = "panda";

const arraySaya3 = JSON.parse(JSON.stringify(arrayOri));
arraySaya3[4] = "ikan";
arraySaya3[5] = "beruang";

console.log(arraySaya3);

console.log("ini adalah array ORIGINAL : " + arrayOri);
console.log(arraySaya2);

// contoh berbagai macam isi array

const macamArray = [
  "cicak",
  {
    lari: function () {
      // lari sebuah function kita bisa memanggil langsung seperti macamArray[index].lari()
      console.log("sedang berlari");
    },
    berhenti: function () { //ini adalah contoh dari object method
      // sama seperti lari
      console.log("sedang berhenti");
    },
  },
  ["pagi", "siang"], //ini adalah contoh array dalal array
];
// PADA BAGIAN lari:function berarti kita membuat function dengan nama lari, untuk mengaksesnya kita perlu tahu dia array index ke - berapa

console.log(macamArray);
console.log(macamArray[1].lari);
macamArray[1].lari();

// contoh merge pada array
const arrayMerge = macamArray.concat(arrayOri); // dengan bantun method concat() kita dapat melakukan merging dengan mudah
console.log(arrayMerge);

console.log("menampilka list merging");
for (list of arrayMerge) {
  // ini akan menampilkan isi array yang ada pada arrayMerge

  console.log(list);
}

console.log("==== menampilkan index merging ====");
for (list in arrayMerge) {
  // ini akan menampilkan semua list yang ada pada arrayMerge
  console.log(list);
}

console.log(
  "=====menampilkan value dan index dengan menggunakan method map() ====="
);
arrayMerge.map((value, index) =>
  console.log("value : " + value, ",index : " + index)
);

// contoh data menggunakan API

const datas = [
  {
    nama: "fajar abdillah ahmad",
    stack: "fullstack developer",
    age: 23,
  },
  {
    nama: "aji kurniawan",
    stack: "javascript",
    age: 30,
  },
  {
    nama: "bowo",
    stack: "python",
    age: 27,
  },
];

console.log("======== contoh menggunakan fake API =========");
datas.map((values, index) => {
  console.log(values); // ini akan menampikan semua yang ada dalam datas
  // jika menggunakan values.nama maka hanya akan menampilkan nama dalam datas atau values.stack akan menampilkan stacknya
});

console.log(
  "sorting data age dan menampilkannya dari yang besar ke yang kecil"
);
datas
  .filter((x) => x.age > 23) // dengan menggunakan arrow function () => . membuat variable x lalu diberi arrow fucntion dimana x.age
  .sort((a, b) => b.age - a.age) // variabel a,b digunakan untuk melakukan sort yang tentunya menggunakan arrow function
  .map((values, index) => console.log(values.age));

//INGAT urutan harus diperhatikan filter tidak boleh ditempatkan paling akhir
