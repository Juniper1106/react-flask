$(document).ready(function () {
  let fogDeg = 0;

  $("#3-4-4").bind("input propertychange", function () {
    changeFogState();
  });

  document.getElementById("3-4-6").addEventListener("change", function () {
    changeFogState();
  });

  function changeFogState() {
    let fog = document.getElementById("3-4-4");
    fogDeg = fog.value;
    // console.log(typeof fogDeg);

    switch (fogDeg) {
      case "0":
        $("#fog").attr("class", "fogwrapper hide");
        $("#foglayer_01").attr("class", "fog hide");
        $("#foglayer_02").attr("class", "fog hide");
        $("#foglayer_03").attr("class", "fog hide");
        // console.log(fog.classList);
        break;
      case "1":
        $("#fog").attr("class", "fogwrapper");
        $("#foglayer_01").attr("class", "fog");
        $("#foglayer_02").attr("class", "fog hide");
        $("#foglayer_03").attr("class", "fog hide");
        break;
      case "2":
        $("#fog").attr("class", "fogwrapper");
        $("#foglayer_01").attr("class", "fog");
        $("#foglayer_02").attr("class", "fog");
        $("#foglayer_03").attr("class", "fog hide");
        break;
      case "3":
        $("#fog").attr("class", "fogwrapper");
        $("#foglayer_01").attr("class", "fog");
        $("#foglayer_02").attr("class", "fog");
        $("#foglayer_03").attr("class", "fog");
        break;

      default:
        break;
    }
  }
});
