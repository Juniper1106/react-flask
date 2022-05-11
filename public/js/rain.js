$(document).ready(function () {
  var increment = 0;
  var rainDeg = 360;
  let rain = document.getElementById("3-4-1");

  $("#prev3-5").click(function () {
    changeRainState();
  });

  $("#next3-3").click(function () {
    function txtCount(txt) {
      let val = txt.value;
      var len = val.length;
      return len;
    }

    if (txtCount(document.getElementById("scene")) > 0) {
      changeRainState();
    }
  });

  $("#next3-4, #prev3-4, #3-4").click(function () {
    document.getElementById("rain").style.display = "none";
  });

  $("#3-4-1").bind("input propertychange", function () {
    changeRainState();
  });

  document.getElementById("3-4-6").addEventListener("change", function () {
    changeRainState();
  });

  var makeItRain = function () {
    //clear out everything
    $(".rain").empty();

    var drops = "";
    var backDrops = "";

    while (increment < rainDeg) {
      //couple random numbers to use for various randomizations
      //random number between 98 and 1
      var randoHundo = Math.floor(Math.random() * (98 - 1 + 1) + 1);
      //random number between 5 and 2
      var randoFiver = Math.floor(Math.random() * (5 - 2 + 1) + 2);
      //increment
      increment += randoFiver;
      //add in a new raindrop with various randomizations to certain CSS properties
      drops +=
        '<div class="drop" style="left: ' +
        // increment +
        Math.random() * 100 +
        "%; bottom: " +
        (randoFiver + randoFiver - 1 + 100) +
        "%; animation-delay: 0." +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"><div class="stem" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div><div class="splat" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div></div>';
      backDrops +=
        '<div class="drop" style="right: ' +
        // increment +
        Math.random() * 100 +
        "%; bottom: " +
        (randoFiver + randoFiver - 1 + 100) +
        "%; animation-delay: 0." +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"><div class="stem" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div><div class="splat" style="animation-delay: 0.' +
        randoHundo +
        "s; animation-duration: 0.5" +
        randoHundo +
        's;"></div></div>';
    }

    $(".rain.front-row").append(drops);
    $(".rain.back-row").append(backDrops);
  };

  let changeRainState = function () {
    increment = 0;
    rainDeg = rain.value * 30;

    if (rainDeg == 0) {
      document.getElementById("rain").style.display = "none";
    } else {
      document.getElementById("rain").style.display = "contents";
      makeItRain();
    }
  };
});
