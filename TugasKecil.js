// no. 1
let input = prompt("masukan saldo akhir anda ")
alert("saldo akhir anda : "+input)
console.log("saldo akhir anda :"+input)


// no. 2

let hari = new Date().getDay()
switch (hari) {
    case 1:
        hari = "Sekarang hari Senin"
        break;
    case 2:
        hari = "Sekarang hari Selasa"
        break;
    case 3:
        hari = "Sekarang hari Rabu"
        break;
    case 4:
        hari = "Sekarang hari Kamis"
        break;
    case 5:
        hari = "Sekarang hari Jumat"
        break;
    case 6:
        hari = "Sekarang hari Sabtu"
        break;
    case 7:
        hari = "Sekarang hari Minggu"
    default:
        break;
}
console.log(hari)