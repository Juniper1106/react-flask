$(document).ready(function () {
  $("#2-3-1-1, #2-3-1-2, #2-3-2-1, #2-3-2-2").click(function () {
    $("#label" + $(this).attr("id")).css("opacity", "0.8");
  });

  $("#2-3-1-1").click(function () {
    $("#label" + "2-3-1-2").css("opacity", "0.3");
    $("#checkBorder2-3-1").animate({ top: "137px" });
    document.getElementById("realityRelation").removeAttribute("readonly");
    document
      .getElementById("realityRelation")
      .setAttribute("placeholder", "最近在现实生活中...");
  });

  $("#2-3-1-2").click(function () {
    $("#label" + "2-3-1-1").css("opacity", "0.3");
    $("#checkBorder2-3-1").animate({ top: "194.5px" });
    $("#realityRelation").attr("readonly", "true");
    document.getElementById("realityRelation").removeAttribute("placeholder");
  });

  $("#2-3-2-1").click(function () {
    $("#label" + "2-3-2-2").css("opacity", "0.3");
    $("#checkBorder2-3-2").animate({ top: "137px" });
    document.getElementById("similarDream").removeAttribute("readonly");
    document
      .getElementById("similarDream")
      .setAttribute("placeholder", "之前还梦见...");
  });

  $("#2-3-2-2").click(function () {
    $("#label" + "2-3-2-1").css("opacity", "0.3");
    $("#checkBorder2-3-2").animate({ top: "194.5px" });
    $("#similarDream").attr("readonly", "true");
    document.getElementById("similarDream").removeAttribute("placeholder");
  });
});
