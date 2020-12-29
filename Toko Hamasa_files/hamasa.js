console.log("This web is developed originally by me (Abdul Khahar - Web Developer).")

/* Disini saya mengkreasikan sebuah website guna sebagai bussiness web untuk sebuah toko oleh dan dikelola keluarga saya.
Jadi saya bebas memunculkan nama maupun apapun tentang bisnis itu, dan juga tentunya terlepas dari semua copyright karena saya juga memiliki hak milik yang mutlak.
Sekian itu saja, terima kasih.
*/

/* Web Confirmation */

var ingin = confirm("Apakah Anda ingin mengunjungi Toko Hamasa?");

if (ingin) {
window.alert("Welcome to Toko Hamasa, semoga hari Anda menyenangkan!");
} else {
window.alert("Baiklah, terima kasih telah konfirmasi, semoga hari Anda menyenangkan!");
}

/* Style of Arrow Icon for Back To Top */

document.getElementById("arrow").style.width = "5%";
document.getElementById("arrow").style.float = "right";
document.getElementById("arrow").style.filter = "drop-shadow(0 0 10px goldenrod) drop-shadow(0 0 5px white)";