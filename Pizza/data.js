// Window.requestAnimFrame = function () {
//   return (
//     Window.requestAnimationFrame ||
//     Window.webkitRequestAnimationFrame ||
//     Window.mozRequestAnimationFrame ||
//     Window.oRequestAnimationFrame ||
//     Window.msRequestAnimationFrame ||
//     function (callback) {
//       Window.setTimeout(callback);
//     }
//   );
// };

// $(".slide").hislide();

function hitungTotal() {
  const jenis = document.getElementById("jenis").value;
  const ukuran = document.querySelector('input[name="ukuran"]:checked').value;
  const crust = document.getElementById("crust").value;
  const jumlah = parseInt(document.getElementById("jumlah").value);

  let harga = 0;
  let hargat = 0;
  switch (jenis) {
    case "Original Pizza":
      harga += 100000;
      break;
    case "Chicken Supreme Pizza":
      harga += 120000;
      break;
    case "Beafy Feast Pizza":
      harga += 130000;
      break;
    case "Vegetariano":
      harga += 110000;
      break;
    case "Tornado Pizza":
      harga += 120000;
      break;
  }
  switch (ukuran) {
    case "Kecil":
      hargat += 0.8;
      break;
    case "Sedang":
      hargat += 1.2;
      break;
    case "Besar":
      hargat += 1.5;
      break;
  }
  if (crust === "Stuffed Crust Sausage") {
    harga += 15000;
  } else if (crust === "Pan Pizza") {
    harga += 10000;
  } else {
    harga += 20000;
  }

  // const toppingArray = topping.split(",").map((item) => item.trim());
  // harga += toppingArray.length;
  const total = harga * hargat * jumlah;

  document.getElementById("total").textContent = "Rp " + total;
}
