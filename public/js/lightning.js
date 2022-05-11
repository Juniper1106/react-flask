$(document).ready(function () {
  let lightningDeg = 0;
  let lightning = document.getElementById("3-4-3");

  $("#3-4-3").bind("input propertychange", function () {
    changeLightningState();
  });

  document.getElementById("3-4-6").addEventListener("change", function () {
    changeLightningState();
  });

  function changeLightningState() {
    lightningDeg = lightning.value;

    if (lightningDeg == 0) {
      $("#lightning").attr("class", "lightning hide");
    } else {
      $("#lightning").attr("class", "lightning flashit" + lightningDeg);
    }
  }
});
