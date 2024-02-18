alert("heyy fajar")//ini untuk menampilkan popup pada window

/*
selain itu promt juga dapat digunakan untuk popup sekaligus user diminta masukan input
*/
//prompt("masukan nama anda : ")
//console.log('hayolohhhh')ini dapat ditampilkan jika kita inspek, biasanya untuk kebutuhan troubleshooting


/*
kita bisa menampung semuanya dalam variabel termasuk promt
ada beberapa cara untuk membuat variabel
1. var (nilainya dapat berubah2)
2. const (nilainya tidak bisa berubah)
3. let (nilainya bisa berubah)

variabel dapat ditimpa
contoh make const
const f = 12
f = 1
console.log("usia anda "+f) ini akan salah karna const tidak bisa berubah

==================================
kita bisa masukan promt ke dalam variabel
let b = promt("masukan nama anda")
alert("nama anda adalah"+b)


====================================
jika variabel kita panggil sementara kita belum memberi nilai pada variable itu
maka hasilnya undefined 

===================================
==== PENGKONDISIAN ====
1. dengan if-else
let pacar = null
if (pacar == null){
    pacar = "belum punya"
}else{
    pacar = "udah punya"
}

2. dengan switch
switch(pacar){
    case 1: //case adalah nilai dari variabelnya
        pacar = "punya 1 aja"
        break

    case 2: 
        pacar = "punya 2 aku cukup playboy"
        break

    default : 
        pacar = "belum punya pacar" //nilai default
        break
}

*/

let saldoAwal = 50000
let saldoTambahan =80000
const saldoAkhir = saldoAwal + saldoTambahan
var usia = 23
console.log("cookk usia lu itu "+usia)
alert(usia)
alert('saldo awal saya ${saldoAwal}, dan saldo akhir saya ${saldoAkhir}')
alert('saldo akhir saya ${saldoAkhir}')



// PENGENALAN ARRAY
/*
- untuk pembuatan array kita menggunakan kurung siku []
- dalam kurung [] kita bisa memasukan nilai apa saja
- array dimulai dari index ke 0
*/
let namaSiswa = ['fajar', 'pandu', 'biyan']
namaSiswa.push('ujeh', 'sandy')// method push digunakan untuk menambah data ke array
namaSiswa.shift()// method shift() digunakan untuk menghapus index pertama dalam array, param boleh kita isi data arraynya atau kosong
namaSiswa.pop()// method pop() digunakan untuk menghapus index terakhir dalam array
alert(namaSiswa)

//contoh lain
let namaGuru = []
namaGuru[0] = "hasanah"
namaGuru[1] = "joko"
alert(namaGuru)


// PENGENALAN LOOPING
/*
- looping biasa digunakan untuk cek statement pada suatu kasus
untuk keynya ->>  for(<deklarasi var>, <kondisional>, <increment/decrement>){
    //field
}
*/
// 1. looping dengan for
for(let i = 0; i<3; i++){
    console.log("fajar abdillah ahmad")// akan menampilkan fajar abdillah ahmad sebanyak 3 kali dalam console
}

// contoh lain dengan array

/*
let namaHewan = ['angsa', 'bebek', 'ayam', 'burung']
for(let i =0;i<namaHewan.length;i++){ //pada bagian kondisi kita bisa mengisinya dengan apapun bahkan object sekalipun
    console.log(namaHewan[i])// kita memanggil semua dari index ke i, dimana index i = 0, nanti akan berhenti jika sudah mencapai length dari namaHewan

    
    // nb : JIKA INDEX VARIABEL LOOPING KURANG DARI INDEX DATA ARRAY MAKA AKAN ADA HASIL UNDEFINED
    
}
*/


// 2. looping dengan while
/*
looping dengan while kita akan melooping dulu baru mencari kondisi berbeda dengan do kita akan eksekusi dulu sekali, jika true maka akan dijalankan sekali lalu selanjutnya looping akan mencari kondisi biasanya do digunakan dalam looping MENU

*/

let a = 3
/*
INI CONTOH DENGAN WHILE
while (a<5) {
    a++ // nilai a akan bertambah jadi 4 terus 5 sehingga akan mencetak console.log sebannyak 2x
    console.log("ini adalah variabel a")
}

*/
do {
    a++
    console.log("sekarang ini do-while")
} while (a<7);// jika kondisi tidak cocok tetep akan dieksekusi baru mengecek kondisinya