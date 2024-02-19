/*
DOM adalah singkatan dari Document Object Model, DOM memungkinkan kita merubah tampilan html tanpa merusak stuctrurnya kita hanya cukup menggunakan method2 yang tersedia di document


*/

// Merubah title pada html
const body = document.body //ini berarti kita akan mengubah body

document.title = "ini belajar DOM" //disini kita men set title baru untuk html kita
console.log(document.title)


const iniBody = document.body 
iniBody.append("hello bang") //setelah kita arahkan ke body dengan documment.body kita harus append untuk menambahkan ke dalam body


const iniH1 = document.createElement('h1')//<h1></h1>
iniH1.textContent = "<marquee>ini adalah tag H1</marquee>"// <h1>ini adalah tag H1</>
body.append(iniH1) //masukan elemen h1 ke body


const namaSaya = document.createElement('p')
namaSaya.innerHTML="<marquee>nama saya fajar</marquee>"


const namaKamu = document.createElement('b')
namaKamu.innerText = "<marquee>saya jundun</marquee>"

body.append(namaSaya)
body.append(namaKamu)


const btn1 = document.getElementById('btn1')// untuk selector id tidak perlu make tanda khusu jika di panggil lewat js
const btn2 = document.getElementById('btn2')// getElementById digunakan untuk selector id
//const contoh = document.querySelector('.class') ini contoh pemanggilan untuk universal

console.log(btn1)
btn1.style.border = 'bold'// kita bisa menstyle button dengan css lewat js
btn1.style.color = 'yellow'
btn1.style.background = 'coral'
btn1.style.padding = '8px'
btn1.style.fontSize = '20px'

const defaultTextBtn1 = "Klik disini 1"
btn1.textContent = defaultTextBtn1

const defaultTextBtn2 = "Klik disini 2"
btn2.textContent = defaultTextBtn2


function onClick1(){// membuat function untuk event di klik
    alert('button 1 di klik')
    btn1.style.background = 'aqua'// men style background pada button1
    const tambahElemen = document.createElement('h2')
    tambahElemen.innerHTML = "Ini adalah h2"// membuat isi tag h2
    body.append(tambahElemen) //menambahkan tag h2 ke body dengan method append

    tambahElemen.style.color = 'green'
    
    
}

function hover(){
    btn1.textContent = "HOVER"
}

function outHover(){
    btn1.textContent = defaultTextBtn1
}


// tugas kecil munculkan element html nama ketika mouse digeseer ke klik 2 muncul text pas keluar ubah warna textnya

function onHover2(){
    btn2.textContent = "Fajar Abdillah Ahmad"
}

function onOut2(){
    btn2.style.color = "orange"
}

function onClick2(){
    btn2.textContent = defaultTextBtn2
    btn2.style.color = 'black'
}




