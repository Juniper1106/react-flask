$(document).ready(function () {
  let cloudDeg = 0;
  let cloud = document.getElementById("3-4-2");

  $("#3-4-2").bind("input propertychange", function () {
    changeCloudState();
  });

  document.getElementById("3-4-6").addEventListener("change", function () {
    changeCloudState();
  });

  function changeCloudState() {
    cloudDeg = cloud.value;
    // console.log(typeof cloudDeg, cloudDeg);

    switch (cloudDeg) {
      case "0":
        $("#cloud").attr("class", "cloudwrapper hide");
        $("#cloudlayer_01").attr("class", "cloud hide");
        $("#cloudlayer_02").attr("class", "cloud hide");
        $("#cloudlayer_03").attr("class", "cloud hide");
        // console.log(cloud.classList);
        break;
      case "1":
        $("#cloud").attr("class", "cloudwrapper");
        $("#cloudlayer_01").attr("class", "cloud");
        $("#cloudlayer_02").attr("class", "cloud hide");
        $("#cloudlayer_03").attr("class", "cloud hide");
        break;
      case "2":
        $("#cloud").attr("class", "cloudwrapper");
        $("#cloudlayer_01").attr("class", "cloud");
        $("#cloudlayer_02").attr("class", "cloud");
        $("#cloudlayer_03").attr("class", "cloud hide");
        break;
      case "3":
        $("#cloud").attr("class", "cloudwrapper");
        $("#cloudlayer_01").attr("class", "cloud");
        $("#cloudlayer_02").attr("class", "cloud");
        $("#cloudlayer_03").attr("class", "cloud");
        break;

      default:
        break;
    }
  }
});
