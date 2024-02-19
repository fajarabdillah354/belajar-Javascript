
// soal no. 1

const luasLingkaran = (r) => {
  const luasL = Math.PI * Math.sqrt(r);
  console.log("nilai phi : " + Math.PI);
  console.log("luas lingkaran : " + luasL);
};

const luasSegitiga = (a, t) => {
  const nilaiLuasS = (a * t) / 2;
  console.log(
    "luas segitiga dengan alas : " +
      a +
      " dan tinggi : " +
      t +
      " adalah = " +
      nilaiLuasS
  );
};

const luasPersegi = (s) => {
  const luasP = s * 4;
  console.log(
    "nilai dari luas persegi dengan sisi : " + s + " adalah = " + luasP
  );
};

const luasJajar = (alas, tinggi) => {
  const luasJ = alas * tinggi;

  console.log(
    "nilai luas jajargenjang dengan alas :" +
      alas +
      " dan tinggi : " +
      tinggi +
      " adalah = " +
      luasJ
  );
};

luasLingkaran(5);
luasSegitiga(6, 10);
luasPersegi(6);
luasJajar(12, 15);


// soal no. 2






const addBody = document.body;

const addElement = document.createElement("h1");
addElement.textContent = "latihan javascript function";
addBody.append(addElement);

