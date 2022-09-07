$(document).ready(() => {
    $("td").click(function (event) {
      alert("Smpean Mung Ngeklik " + $(this).html() + "!");
    });
    $("th").click(function (event) {
      alert("Sampean Mung Ngeklik " + $(this).html() + "!");
    });
  });