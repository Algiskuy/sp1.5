var nilaiAsli = [5, 9, 6, 7, 9, 8, 10, 7, 8];
var total = nilaiAsli.reduce(function (a, b) {
  return a + b;
}, 0); //angka 0 untuk menanmbahkan angka yang telah kita jumlahkan
//reduce untuk penjumlahan dan pengurangan bilangan yang ada di array

//mean
var mean = function () {
  var hasil = 0;
  for (i = 0; i < arguments.length; i++) {
    hasil += arguments[i] / 9;
  }
  return hasil;
}; // arguments memanggil isi yang ada dalam array
// length untuk menghitung jumlah karakter yang ada
var nilai = mean(5, 9, 6, 7, 9, 8, 10, 7, 8);
document.write("the total value is : ", nilaiAsli.join(" , "), "<br>", "<br>"); //nilai keseluruhannya adalah
document.write("the total amount is : ", total, "<br>", "<br>"); // jumlah keseluruhannya adalah
document.write("the overall average is : ", nilai.toFixed(2)); //Mean dari keseluruhannya adalah
document.write("<br>", "<br>");

//median
var nilaiAslisorted = nilaiAsli.sort(function (a, b) {
  return a - b;
}, 0);
document.write("sorted values : ", nilaiAslisorted.join(" , "), "<br>", "<br>"); //nilai yang diurutkan
//sort mengurutkan/menyusun alfabet/angka dari yg kecil sampai yg besar dan sebaliknya dalam array

function median() {
  if (nilaiAsli.length % 2 == 0) {
    median = nilaiAsli.length / 2 + 1;
  } else {
    median = (nilaiAsli.length + 1) / 2;
  }

  return nilaiAsli[median];
}

document.write("Median : " + median() + "<br>", "<br>");

// Modus
function modus() {
  var modus = [],
    modus1 = [],
    modus2 = 0,
    number;

  for (i = 0; i < nilaiAsli.length; i += 1) {
    number = nilaiAsli[i];
    modus1[number] = (modus1[number] || 0) + 1;

    if (modus1[number] > modus2) {
      modus2 = modus1[number];
    }
  }

  for (i in modus1)
    if (modus1.hasOwnProperty(i)) {
      if (modus1[i] === modus2) {
        modus.push(Number(i));
      }
    }

  return modus;
}

document.write("Modus : " + modus() + "<br>", "<br>");

// Simpangan Baku
function simpanganBaku() {
  var n = nilaiAsli.length;
  var mean = nilaiAsli.reduce((a, b) => a + b) / n;

  return Math.sqrt(
    nilaiAsli.map((x) => Math.pow(x - mean, 2)).reduce((a, b) => a + b) / n
  );
}

document.write("standard deviation : ", simpanganBaku().toFixed(2)); //Simpangan Baku
