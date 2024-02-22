const addElement = document.body;

const iniH1 = document.createElement("h1");
iniH1.textContent = "latihan Looping Javascript";
addElement.append(iniH1);

// soal : buat perulangan dari suatu variabel array(loop ... lalu total nilai adalah 20)
let latihan = [3, 5, 12];
let sum = 0;
// dengan for
for (let i = 0; i < latihan.length; i++) {
  console.log(i);
  sum += latihan[i];
}
console.log(sum);

// dengan while
let i = 0;
let temp = 0;
while (i < latihan.length) {
  console.log("data ke - " + i);
  temp += latihan[i];
  i++;
}
console.log(temp);

//dengan do-while
let a = 0;
let temp2 = 0;
do {
  console.log("data ke -" + a);
  temp2 += latihan[a];
  a++;
} while (a < latihan.length);
console.log(temp2);

// dengan foreach
console.log("==== foreach ====");
let tempf = 0;
latihan.forEach((value, index) => {
  console.log((tempf += value));
});
