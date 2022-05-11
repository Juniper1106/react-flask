$(document).ready(function () {
  $("#2-3-1-1, #2-3-1-2, #2-3-2-1, #2-3-2-2").click(function () {
    $("#label" + $(this).attr("id")).css("opacity", "0.8");
  });

  $("#2-3-1-1").click(function () {
    $("#label" + "2-3-1-2").css("opacity", "0.3");
    $("#checkBorder2-3-1").animate({ top: "137px" });
  });

  $("#2-3-1-2").click(function () {
    $("#label" + "2-3-1-1").css("opacity", "0.3");
    $("#checkBorder2-3-1").animate({ top: "194.5px" });
  });

  $("#2-3-2-1").click(function () {
    $("#label" + "2-3-2-2").css("opacity", "0.3");
    $("#checkBorder2-3-2").animate({ top: "137px" });
  });

  $("#2-3-2-2").click(function () {
    $("#label" + "2-3-2-1").css("opacity", "0.3");
    $("#checkBorder2-3-2").animate({ top: "194.5px" });
  });
});
