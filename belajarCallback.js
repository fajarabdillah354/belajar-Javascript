/*
    catatan seputar callback sudah dibuat di file terpisah yaitu infoCallback.txt

*/

const addElement = () => {
  const header = document.createElement("h1");
  header.textContent = "belajar callback setTimeOut";

  document.body.appendChild(header);
};

setTimeout(addElement, 5000);
console.info("program selesai"); // kita check dengan ini jika langsung keluar diconsole sementar element belum muncul berarti berhasil

const ubahYuhu = () => {
  //kita bisa mengubah variabel menjadi function dengan menggunakan arrow function
  const ubah = document.getElementById("yuhu");
  ubah.textContent = new Date().toString(); //mengenerate Date yaitu hari,bulan,tanggal,jam
};

setInterval(ubahYuhu, 1000); //setiap 1 detik callback dipanggil

const tambahLi = () => {
  let x = document.createElement("link");
  x.setAttribute("href", "https://instagram.com/fajr_dillah01/");
  document.body.appendChild(document.createTextNode(x));

  // let target = document.getElementsByTagName("a");
  // let list = document.createElement("a");
  // list.setAttribute("href", "https://instagram.com/fajr_dillah01/");
  // list.appendChild(document.createTextNode("clik me"));
  // target.appendChild(list);
};

setTimeout(tambahLi, 3000);
/*
    ini adalah annymous function atau yang biasa dikenal dengan function tanpa nama
    const iniA  = new HTTP...
    iniA.addEventListener("load", function(){ //DIBAGIAN FUNCTION() adalah annoymous

    })


*/
