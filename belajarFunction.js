/*
    function adalah subprogram yang dapat dipanggil dibagian lain kode kita atau di dalam kode itu sendiri(rekursif). function dapat memiliki serangkain pernyataan di blocknya

    pada javascript function dapat menerima dan selalu mengembalikan nilai. jika kita membuat function yang tidak mengembalikan nilai maka function akan tetap mengembalikan nilai dalam bentuk nilai undefined



*/

// ADA BEBERAPA CARA UNTUK MEMBUAT FUNCTION

// pada pembelajaran kali ini console.log() -> return

// 1. function standart atau regular

function getName(firstName, lastName) {
  // disini kita menggunakan parameter untuk langsung mengambil nilai atau yang biasa dikenal argument
  console.log("your name is " + (firstName + lastName));
}
getName("fajar abdillah ", "ahmad");

// 2. function dengan menggunakan object
const iniObjFunction = new Function("x", "y", "console.log(x+y)"); // ini merupakan cara yang unik dalam pemograman javascript
// variabel x dan y akan dengan otomatis dimasukan ke dalam console
iniObjFunction(2, 3); // kita memanggil function yang telah kita buat dengan diberi parameter sebagai nilai x dan y

// 3. function dengan menggunakan arrow function(ini umum digunakan dalam industri)

const arrowFuntion = (a, b) => {
  // parameter a dan b akan masuk sebagai argument
  console.log(a * b);
};

arrowFuntion(5, 5);

// selanjutnya kita dapat mengkreasika apapun dalam function yang kita buat
// contoh dibawah ini

const iniRandom = () => {
  const getRandom = ~~(Math.random() * 1000);
  if (getRandom > 650) {
    console.log("wiiihhhh anda lulus test ", getRandom);
  } else {
    console.log("anda tidak lulus maaf yaaa skor anda ", getRandom);
  }
};
console.log(iniRandom());

/*
    TUGAS!!
    1. membuat perhitungan mtk(menghitung luas lingkaran, segitiga,persegipanjan, jajargenjang)
    2. 

*/
