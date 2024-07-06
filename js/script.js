//Untuk menampung data yang telah di input
var dataWeeboo = [];

//Untuk menjalankan logika ketika input data di form *Input Data Weeboo*
function handleSubmit(event) {
  //handle reload ketika submit
  event.preventDefault();

  //mengambil element form
  var loginForm = document.getElementById("loginForm");

  //mengambil data yang kita input dari form
  var form = new FormData(loginForm);

  //data form tersebut lalu di ubah menjadi sebuah object
  let data = Object.fromEntries(form);

  //pengecekan apakah data form yang di input terisi atau tidak

  //Jika data kosong maka akan muncul alert
  if (
    data["nomor"] == "" ||
    data["nama"] == "" ||
    data["kelas"] == "" ||
    data["alamat"] == "" ||
    data["anime_fav"] == ""
  ) {
    //alert yang akan muncul ketika salah satu data form kosong
    alert("Data tidak boleh kosong !");
  } else {
    //Jika data terisi makan data yang di input akan di...
    dataWeeboo.push(data); //1. disimpan di variable dataWeeboo

    createElement(data); //2. Lalu akan dibuatkan element baru

    notif(); //3. Akan muncul notifikasi sukses
  }
}

//function untuk membuat element baru pada table, dan tambahkan parameter untuk menyimpan data yang di input ketika di panggil
function createElement(data) {
  //data dari parameter, di tampung di variable baru, dan datanya di benahi menjadi sebuah element HTML baru
  var data = data;

  //mengambil element tbody dalam element table
  const tbody = document.getElementById("data-table");

  //membuat element tr (table-row) baru di dalam element tbody
  const tr = document.createElement("tr");

  //data yang ingin di masukan ke tr (table-row)
  let HTML = `<td>${data["nomor"]}</td> 
        <td>${data["nama"]}</td>
        <td>${data["kelas"]}</td>
        <td>${data["alamat"]}</td>
        <td>${data["anime_fav"]}</td>`;

  //memasukan data yang dibuat ke tr (table-row)
  tr.innerHTML = HTML;

  //menambahkan tr (table-row) ke tbody (table-body)
  tbody.appendChild(tr);
}

//untuk mengecek data array pada dataWeeboo
// setInterval(() => {
//   console.clear();
//   console.log(dataWeeboo);
// }, 1000); // <-- 1000 disini berfungsi agar code console di jalankan setiap 1000ms atau 1 detik;

//function untuk memunculkan notif ketika input berhasil
function notif() {
  //mengambil element notif
  let notifikasi = document.getElementById("notifInputData");

  //memunculkan notif terlebih dahulu
  notifikasi.style.display = "flex";

  //lalu di hidden dalam waktu mundur selama 3000ms atau 3 detik
  setTimeout(() => {
    // set display menjadi flex agar muncul
    notifikasi.style.display = "none";
  }, 3000);
}
