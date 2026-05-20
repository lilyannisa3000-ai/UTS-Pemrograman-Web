let cart = [];

function addCart(nama,harga){

let ditemukan = false;

for(let i=0;i<cart.length;i++){

if(cart[i].nama==nama){

cart[i].qty++;

ditemukan=true;

}

}

if(!ditemukan){

cart.push({

nama:nama,

harga:harga,

qty:1

});

}

renderCart();

}

function renderCart(){

let tbody =
document.getElementById("cart");

tbody.innerHTML="";

let subtotal = 0;

for(let i=0;i<cart.length;i++){

let item = cart[i];

subtotal +=
item.harga*item.qty;

tbody.innerHTML += `

<tr>

<td>${item.nama}</td>

<td>

<button onclick="kurang(${i})">
-
</button>

${item.qty}

<button onclick="tambah(${i})">
+
</button>

</td>

<td>

Rp ${item.harga*item.qty}

</td>

</tr>

`;

}

document.getElementById(
"subtotal"
).innerHTML=subtotal;

updateTotal();

}

function tambah(index){

cart[index].qty++;

renderCart();

}

function kurang(index){

cart[index].qty--;

if(cart[index].qty<=0){

cart.splice(index,1);

}

renderCart();

}

function updateTotal(){

let subtotal =
parseInt(

document.getElementById(
"subtotal"
).innerHTML

);

let ongkir = 0;

let layanan =
document.getElementById(
"layanan"
).value;

if(layanan=="Delivery"){

ongkir=10000;

}

document.getElementById(
"ongkir"
).innerHTML=ongkir;

let total =
subtotal+5000+ongkir;

document.getElementById(
"total"
).innerHTML=total;

}

document.getElementById(
"layanan"
).addEventListener(

"change",

updateTotal

);

document.getElementById(
"checkoutForm"
).addEventListener(

"submit",

function(e){

e.preventDefault();

let nama =
document.getElementById(
"nama"
).value;

if(nama==""){

alert(
"Nama wajib diisi!"
);

return;

}

alert(

"Pesanan berhasil! Terima kasih sudah order di Beco Burger 🍔"

);

cart=[];

renderCart();

document.getElementById(
"checkoutForm"
).reset();

document.getElementById(
"subtotal"
).innerHTML=0;

document.getElementById(
"ongkir"
).innerHTML=0;

document.getElementById(
"total"
).innerHTML=0;

}

);