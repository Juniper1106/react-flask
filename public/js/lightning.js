$(document).ready(function () {
  let lightningDeg = 0;

  $("#3-4-6").bind("input propertychange", function () {
    let lightning = document.getElementById("3-4-6");
    lightningDeg = lightning.value;

    if (lightningDeg == 0) {
      $("#lightning").attr("class", "lightning hide");
    } else {
      $("#lightning").attr("class", "lightning flashit" + lightningDeg);
    }
  });
});
