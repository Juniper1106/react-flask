var pageFlag;
$(document).ready(function () {
  // detect device
  //定义一个函数判断是手机端还是pc端
  function isMobile() {
    if (
      window.navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      )
    ) {
      return true; // mobile
    } else {
      return false; // PC
    }
  }

  // ---------------global function----------------
  // ···············count text··············
  function txtCount(txt) {
    let val = txt.value;
    var len = val.length;
    return len;
  }

  // ···············detect input················
  $("#character, #relation, #action, #scene").bind(
    "input propertychange",
    function () {
      $("#prompt3-1, #prompt3-2, #prompt3-3").attr("class", "promptTag hide");
    }
  );

  // ···············radio button···············
  $(":radio").click(function () {
    var r = $(this).attr("name");
    var id = $(this).attr("id");

    console.log(id);
    if (
      id != "2-3-1-1" &&
      id != "2-3-1-2" &&
      id != "2-3-2-1" &&
      id != "2-3-2-2"
    ) {
      $("#prompt2-1, #prompt2-4, #prompt3-6, #prompt4-4").attr(
        "class",
        "promptTag hide"
      );
      $(":radio[name=" + r + "]:not(:checked)").attr("tag", 0);
      if ($(this).attr("tag") == 1) {
        $(this).prop("checked", false);
        $(this).attr("tag", 0);
        $("#opt" + id).css("opacity", "0.3");
      } else {
        $(this).attr("tag", 1);
        $("." + r).css("opacity", "0.3");
        $("#opt" + id).css("opacity", "0.8");
      }
    }
  });

  // ················forget button················
  $(".forgetBtn").click(function () {
    var id = $(this).attr("id");
    $("#page" + id)
      .find("input")
      .attr("tag", 0);
    $("#page" + id)
      .find("input")
      .prop("checked", false);
    $("#page" + id)
      .find(".group" + id)
      .css("opacity", "0.3");
  });

  // ················checkbox·················
  $(":checkbox").click(function () {
    var id = $(this).attr("id");
    if ($(this).prop("checked") == false) {
      $("#opt" + id).css("opacity", "0.3");
    } else {
      $("#opt" + id).css("opacity", "0.8");
    }
  });

  // ···············logo·················
  $("#logo").click(function () {
    if (pageFlag == 0) {
      window.location.reload();
    } else {
      if (confirm("即将回首页，填写的内容将不会被保存，是否继续？") == true) {
        window.location.reload();
      }
    }
  });

  // ---------------homePage---------------
  pageFlag = 0;
  // hover to play video
  if (isMobile() == false) {
    document.getElementById("backVideo").removeAttribute("autoplay");
    $(".homeBtn").hover(
      function () {
        $("#backVideo")[0].play();
      },
      function () {
        $("#backVideo")[0].pause();
      }
    );
  }
  // to page1-1
  $("#homeBtn").click(function () {
    $("#backVideo").css("display", "none");
    document.getElementById("backVideo").currentTime = 0;
    $("#page0").fadeOut(500);
    $("#extra-background").attr("class", "extra-background page1");
    $("#extra-background, #page1-1").fadeIn(500);
    $("#page1-1").removeClass("hide");
    $("#indicatorGroup").attr(
      "class",
      "indicatorGroup animate__animated animate__slideInUp"
    );
    $("#indicatorGroup").animate({ opacity: "1" }, "500ms");
    $("#indicatorContainer").removeClass("hide");
    pageFlag = 1;
    $("#indicator").animate({ left: "0px" });
    $("#1").animate({ left: "34px" });
    $("#2").animate({ left: "68px" });
    $("#3").animate({ left: "102px" });
    $("#4").animate({ left: "136px" });
  });

  // -------------page1----------------
  // ·············Q1-1·················
  // text change with length
  $("#dreamTitle").bind("input propertychange", function () {
    var label = document.getElementById("titleCount");
    $("#titleCount").css("color", "rgba(255, 255, 255, 0.3)");
    label.innerHTML =
      document.getElementById("dreamTitle").value.length + "/15";
  });
  // back to home page
  $("#backBtnInPage1").click(function () {
    $("#backVideo").css("display", "flex");
    $("#extra-background, #page1-1").fadeOut(500);
    $("#extra-background").attr("class", "extra-background");
    $("#page0").fadeIn(500);
    $("#question1-1").attr("class", "question");
    $("#indicatorGroup").attr(
      "class",
      "indicatorGroup animate__animated animate__slideOutDown"
    );
    $("#indicatorGroup").animate({ opacity: "0" }, "500ms");
    pageFlag = 0;
    $("#indicator").animate({ left: "0px" });
    $("#1").animate({ left: "34px" });
    $("#2").animate({ left: "68px" });
    $("#3").animate({ left: "102px" });
    $("#4").animate({ left: "136px" });
  });
  // to page1-2
  $("#next1-1").click(function () {
    if (txtCount(document.getElementById("dreamTitle")) > 0) {
      $("#question1-1").attr(
        "class",
        "question animate__animated animate__slideOutLeft"
      );
      $("#question1-1").animate({ opacity: "0" }, "500ms");
      $("#bottomBtn1-1").fadeOut(500);

      $("#page1-2").removeClass("hide");
      $("#question1-2").attr(
        "class",
        "question animate__animated animate__slideInRight"
      );
      $("#question1-2").animate({ opacity: "1" }, "500ms");
      $("#bottomBtn1-2").fadeIn(500);
    } else {
      $("#titleCount").css("color", "#F86464");
      var label = document.getElementById("titleCount");
      label.innerHTML = "请输入";
    }
  });

  // ·············Q1-2·················
  // text change with length
  $("#description").bind("input propertychange", function () {
    var label = document.getElementById("descriptionCount");
    $("#descriptionCount").css("color", "rgba(255, 255, 255, 0.3)");
    label.innerHTML =
      document.getElementById("description").value.length + "/100";
  });
  // back to page1-1
  $("#prev1-2").click(function () {
    $("#question1-1").attr(
      "class",
      "question animate__animated animate__slideInLeft"
    );
    $("#question1-1").animate({ opacity: "1" }, "500ms");
    $("#bottomBtn1-1").fadeIn(500);

    $("#question1-2").attr(
      "class",
      "question animate__animated animate__slideOutRight"
    );
    $("#question1-2").animate({ opacity: "0" }, "500ms");
    $("#bottomBtn1-2").fadeOut(500);
  });
  // to page2-1
  $("#continueBtnInPage1").click(function () {
    if (txtCount(document.getElementById("description")) > 0) {
      $("#extra-background").attr("class", "extra-background page2");
      $("#page2-1").fadeIn(500);
      $("#page1-2").fadeOut(500);
      $("#page2-1").removeClass("hide");
      $("#question1-2").attr("class", "question");
      $("#question2-1").attr("class", "optQuestion grid-2x5");
      pageFlag = 2;
      $("#1").animate({ left: "0px" });
      $("#indicator").animate({ left: "34px" });
      $("#2").animate({ left: "68px" });
      $("#3").animate({ left: "102px" });
      $("#4").animate({ left: "136px" });
    } else {
      $("#descriptionCount").css("color", "#F86464");
      var label = document.getElementById("descriptionCount");
      label.innerHTML = "请输入";
    }
  });

  // -------------page2----------------
  // ·············Q2-1·················
  // back to page1-2
  $("#backBtnInPage2").click(function () {
    $("#extra-background").attr("class", "extra-background page1");
    $("#question1-2").attr("class", "question");
    $("#page1-2").fadeIn(500);
    $("#page2-1").fadeOut(500);
    $("#question2-1").attr("class", "optQuestion grid-2x5");
    pageFlag = 1;
    $("#indicator").animate({ left: "0px" });
    $("#1").animate({ left: "34px" });
    $("#2").animate({ left: "68px" });
    $("#3").animate({ left: "102px" });
    $("#4").animate({ left: "136px" });
  });
  // to page2-2
  $("#next2-1").click(function () {
    var flag = 0;
    for (let index = 1; index <= 5; index++) {
      var state = $("#2-1-" + index).prop("checked");
      if (state == true) {
        flag = 1;
      }
    }
    if (flag == 0) {
      $("#prompt2-1").removeClass("hide");
    } else {
      $("#question2-1").attr(
        "class",
        "optQuestion grid-2x5 animate__animated animate__slideOutLeft"
      );
      $("#question2-1").animate({ opacity: "0" }, "500ms");
      $("#bottomBtn2-1").fadeOut(500);

      $("#page2-2").removeClass("hide");
      $("#question2-2").attr(
        "class",
        "optQuestion grid-2x5 animate__animated animate__slideInRight"
      );
      $("#question2-2").animate({ opacity: "1" }, "500ms");
      $("#bottomBtn2-2").fadeIn(500);
    }
  });

  // ·············Q2-2·················
  // back to page2-1
  $("#prev2-2").click(function () {
    $("#question2-1").attr(
      "class",
      "optQuestion grid-2x5 animate__animated animate__slideInLeft"
    );
    $("#question2-1").animate({ opacity: "1" }, "500ms");
    $("#bottomBtn2-1").fadeIn(500);

    $("#question2-2").attr(
      "class",
      "optQuestion grid-2x5 animate__animated animate__slideOutRight"
    );
    $("#question2-2").animate({ opacity: "0" }, "500ms");
    $("#bottomBtn2-2").fadeOut(500);
  });

  // forget button
  $("#2-2").click(function () {
    $("#question2-2").attr(
      "class",
      "optQuestion grid-2x5 animate__animated animate__slideOutLeft"
    );
    $("#question2-2").animate({ opacity: "0" }, "500ms");

    $("#page2-3").removeClass("hide");
    $("#question2-3").attr(
      "class",
      "optQuestion grid-2x5 animate__animated animate__slideInRight"
    );
    $("#question2-3").animate({ opacity: "1" }, "500ms");

    $("#bottomBtn2-2").css("display", "none");
    $("#bottomBtn2-3").css("display", "block");
  });

  // to page2-3
  $("#next2-2").click(function () {
    $("#question2-2").attr(
      "class",
      "optQuestion grid-2x5 animate__animated animate__slideOutLeft"
    );
    $("#question2-2").animate({ opacity: "0" }, "500ms");

    $("#page2-3").removeClass("hide");
    $("#question2-3").attr(
      "class",
      "optQuestion grid-2x3 animate__animated animate__slideInRight"
    );
    $("#question2-3").animate({ opacity: "1" }, "500ms");

    $("#bottomBtn2-2").css("display", "none");
    $("#bottomBtn2-3").css("display", "block");
  });

  // ·············Q2-3·················
  // back to page2-2
  $("#prev2-3").click(function () {
    $("#question2-2").attr(
      "class",
      "optQuestion grid-2x5 animate__animated animate__slideInLeft"
    );
    $("#question2-2").animate({ opacity: "1" }, "500ms");

    $("#question2-3").attr(
      "class",
      "question animate__animated animate__slideOutRight"
    );
    $("#question2-3").animate({ opacity: "0" }, "500ms");

    $("#bottomBtn2-3").css("display", "none");
    $("#bottomBtn2-2").css("display", "block");
  });
  // skip button
  $("#2-3").click(function () {
    $("#question2-3").attr(
      "class",
      "question animate__animated animate__slideOutLeft"
    );
    $("#question2-3").animate({ opacity: "0" }, "500ms");
    $("#bottomBtn2-3").fadeOut(500);

    $("#page2-4").removeClass("hide");
    $("#question2-4").attr(
      "class",
      "optQuestion grid-2x2 animate__animated animate__slideInRight"
    );
    $("#question2-4").animate({ opacity: "1" }, "500ms");
    $("#bottomBtn2-4").fadeIn(500);
  });
  // to page2-4
  $("#next2-3").click(function () {
    $("#question2-3").attr(
      "class",
      "question animate__animated animate__slideOutLeft"
    );
    $("#question2-3").animate({ opacity: "0" }, "500ms");
    $("#bottomBtn2-3").fadeOut(500);

    $("#page2-4").removeClass("hide");
    $("#question2-4").attr(
      "class",
      "optQuestion grid-2x2 animate__animated animate__slideInRight"
    );
    $("#question2-4").animate({ opacity: "1" }, "500ms");
    $("#bottomBtn2-4").fadeIn(500);
  });

  // ·············Q2-4·················
  // back to page2-3
  // $("#prev2-4").click(function () {
  //   $("#question2-3").attr(
  //     "class",
  //     "question animate__animated animate__slideInLeft"
  //   );
  //   $("#question2-3").animate({ opacity: "1" }, "500ms");
  //   $("#bottomBtn2-3").fadeIn(500);

  //   $("#question2-4").attr(
  //     "class",
  //     "optQuestion grid-2x2 animate__animated animate__slideOutRight"
  //   );
  //   $("#question2-4").animate({ opacity: "0" }, "500ms");
  //   $("#bottomBtn2-4").fadeOut(500);
  // });
  // // to page 3-1
  // $("#continueBtnInPage2").click(function () {
  //   var flag = 0;
  //   for (let index = 1; index <= 2; index++) {
  //     var state = $("#2-4-" + index).prop("checked");
  //     if (state == true) {
  //       flag = 1;
  //     }
  //   }
  //   if (flag == 0) {
  //     $("#prompt2-4").removeClass("hide");
  //   } else {
  //     $("#extra-background").attr("class", "extra-background page3");
  //     $("#page3-1").fadeIn(500);
  //     $("#page2-4").fadeOut(500);
  //     $("#page3-1").removeClass("hide");
  //     $("#question2-4").attr("class", "optQuestion grid-2x2");
  //     $("#question3-1").attr("class", "question");
  //     pageFlag = 3;
  //     $("#1").animate({ left: "0px" });
  //     $("#2").animate({ left: "34px" });
  //     $("#indicator").animate({ left: "68px" });
  //     $("#3").animate({ left: "102px" });
  //     $("#4").animate({ left: "136px" });
  //   }
  // });

  // -------------page3----------------
  // ·············Q3-1·················
  // back to page2-4
  $("#backBtnInPage3").click(function () {
    $("#extra-background").attr("class", "extra-background page2");
    $("#question2-4").attr("class", "optQuestion grid-2x2");
    $("#page2-4").fadeIn(500);
    $("#page3-1").fadeOut(500);
    $("#question3-1").attr("class", "question");
    pageFlag = 2;
    $("#1").animate({ left: "0px" });
    $("#indicator").animate({ left: "34px" });
    $("#2").animate({ left: "68px" });
    $("#3").animate({ left: "102px" });
    $("#4").animate({ left: "136px" });
  });
  // to page 3-2
  $("#next3-1").click(function () {
    if (txtCount(document.getElementById("character")) > 0) {
      $("#question3-1").attr(
        "class",
        "question animate__animated animate__slideOutLeft"
      );
      $("#question3-1").animate({ opacity: "0" }, "500ms");
      $("#bottomBtn3-1").fadeOut(500);

      $("#page3-2").removeClass("hide");
      $("#question3-2").attr(
        "class",
        "optQuestion grid-2x3 animate__animated animate__slideInRight"
      );
      $("#question3-2").animate({ opacity: "1" }, "500ms");
      $("#bottomBtn3-2").fadeIn(500);
    } else {
      $("#prompt3-1").removeClass("hide");
    }
  });

  // ·············Q3-2·················
  // back to page3-1
  $("#prev3-2").click(function () {
    $("#question3-1").attr(
      "class",
      "question animate__animated animate__slideInLeft"
    );
    $("#question3-1").animate({ opacity: "1" }, "500ms");
    $("#bottomBtn3-1").fadeIn(500);

    $("#question3-2").attr(
      "class",
      "optQuestion grid-2x3 animate__animated animate__slideOutRight"
    );
    $("#question3-2").animate({ opacity: "0" }, "500ms");
    $("#bottomBtn3-2").fadeOut(500);
  });
  // to page3-3
  $("#next3-2").click(function () {
    if (
      txtCount(document.getElementById("relation")) > 0 &&
      txtCount(document.getElementById("action")) > 0
    ) {
      $("#question3-2").attr(
        "class",
        "optQuestion grid-2x3 animate__animated animate__slideOutLeft"
      );
      $("#question3-2").animate({ opacity: "0" }, "500ms");

      $("#page3-3").removeClass("hide");
      $("#question3-3").attr(
        "class",
        "question animate__animated animate__slideInRight"
      );
      $("#question3-3").animate({ opacity: "1" }, "500ms");

      $("#bottomBtn3-2").css("display", "none");
      $("#bottomBtn3-3").css("display", "block");
    } else {
      $("#prompt3-2").removeClass("hide");
    }
  });

  // ·············Q3-3·················
  // back to page3-2
  $("#prev3-3").click(function () {
    $("#question3-2").attr(
      "class",
      "optQuestion grid-2x3 animate__animated animate__slideInLeft"
    );
    $("#question3-2").animate({ opacity: "1" }, "500ms");

    $("#question3-3").attr(
      "class",
      "question animate__animated animate__slideOutRight"
    );
    $("#question3-3").animate({ opacity: "0" }, "500ms");

    $("#bottomBtn3-3").css("display", "none");
    $("#bottomBtn3-2").css("display", "block");
  });
  // to page3-4
  $("#next3-3").click(function () {
    if (txtCount(document.getElementById("scene")) > 0) {
      $("#question3-3").attr(
        "class",
        "question animate__animated animate__slideOutLeft"
      );
      $("#question3-3").animate({ opacity: "0" }, "500ms");

      $("#page3-4").removeClass("hide");
      $("#question3-4").attr(
        "class",
        "optQuestion grid-4x2 animate__animated animate__slideInRight"
      );
      $("#question3-4").animate({ opacity: "1" }, "500ms");

      $("#bottomBtn3-3").css("display", "none");
      $("#bottomBtn3-4").css("display", "block");

      if (document.getElementById("3-4-2") != "0") {
        $("#cloud").attr("class", "cloudwrapper");
      }
      if (document.getElementById("3-4-3").value != "0") {
        $("#lightning").attr("class", "lightning flashit3");
      }
      if (document.getElementById("3-4-4").value != "0") {
        $("#fog").attr("class", "fogwrapper");
      }
    } else {
      $("#prompt3-3").removeClass("hide");
    }
  });

  // ·············Q3-4·················
  // back to page3-3
  $("#prev3-4").click(function () {
    $("#question3-3").attr(
      "class",
      "question animate__animated animate__slideInLeft"
    );
    $("#question3-3").animate({ opacity: "1" }, "500ms");

    $("#question3-4").attr(
      "class",
      "optQuestion grid-4x2 animate__animated animate__slideOutRight"
    );
    $("#question3-4").animate({ opacity: "0" }, "500ms");

    $("#bottomBtn3-4").css("display", "none");
    $("#bottomBtn3-3").css("display", "block");

    $("#lightning").attr("class", "lightning hide");
    $("#cloud").attr("class", "cloudwrapper hide");
    $("#fog").attr("class", "fogwrapper hide");
  });
  // forget button
  $("#3-4").click(function () {
    $("#question3-4").attr(
      "class",
      "optQuestion grid-4x2 animate__animated animate__slideOutLeft"
    );
    $("#question3-4").animate({ opacity: "0" }, "500ms");

    $("#page3-5").removeClass("hide");
    $("#question3-5").attr(
      "class",
      "optQuestion grid-2x5 animate__animated animate__slideInRight"
    );
    $("#question3-5").animate({ opacity: "1" }, "500ms");

    $("#bottomBtn3-4").css("display", "none");
    $("#bottomBtn3-5").css("display", "block");

    $("#lightning").attr("class", "lightning hide");
    $("#cloud").attr("class", "cloudwrapper hide");
    $("#fog").attr("class", "fogwrapper hide");
  });
  // to page3-5
  $("#next3-4").click(function () {
    $("#question3-4").attr(
      "class",
      "optQuestion grid-4x2 animate__animated animate__slideOutLeft"
    );
    $("#question3-4").animate({ opacity: "0" }, "500ms");

    $("#page3-5").removeClass("hide");
    $("#question3-5").attr(
      "class",
      "optQuestion grid-2x5 animate__animated animate__slideInRight"
    );
    $("#question3-5").animate({ opacity: "1" }, "500ms");

    $("#bottomBtn3-4").css("display", "none");
    $("#bottomBtn3-5").css("display", "block");

    $("#lightning").attr("class", "lightning hide");
    $("#cloud").attr("class", "cloudwrapper hide");
    $("#fog").attr("class", "fogwrapper hide");
  });

  // ·············Q3-5·················
  // back to page3-4
  $("#prev3-5").click(function () {
    $("#question3-4").attr(
      "class",
      "optQuestion grid-4x2 animate__animated animate__slideInLeft"
    );
    $("#question3-4").animate({ opacity: "1" }, "500ms");

    $("#question3-5").attr(
      "class",
      "optQuestion grid-2x5 animate__animated animate__slideOutRight"
    );
    $("#question3-5").animate({ opacity: "0" }, "500ms");

    $("#bottomBtn3-5").css("display", "none");
    $("#bottomBtn3-4").css("display", "block");

    if (document.getElementById("3-4-2") != "0") {
      $("#cloud").attr("class", "cloudwrapper");
    }
    if (document.getElementById("3-4-3").value != "0") {
      $("#lightning").attr("class", "lightning flashit3");
    }
    if (document.getElementById("3-4-4").value != "0") {
      $("#fog").attr("class", "fogwrapper");
    }
  });
  // forget button
  $("#3-5").click(function () {
    $("#question3-5").attr(
      "class",
      "optQuestion grid-2x5 animate__animated animate__slideOutLeft"
    );
    $("#question3-5").animate({ opacity: "0" }, "500ms");
    $("#bottomBtn3-5").fadeOut(500);

    $("#page3-6").removeClass("hide");
    $("#question3-6").attr(
      "class",
      "optQuestion grid-2x2 animate__animated animate__slideInRight"
    );
    $("#question3-6").animate({ opacity: "1" }, "500ms");
    $("#bottomBtn3-6").fadeIn(500);
  });
  // to page 3-6
  $("#next3-5").click(function () {
    $("#question3-5").attr(
      "class",
      "optQuestion grid-2x5 animate__animated animate__slideOutLeft"
    );
    $("#question3-5").animate({ opacity: "0" }, "500ms");
    $("#bottomBtn3-5").fadeOut(500);

    $("#page3-6").removeClass("hide");
    $("#question3-6").attr(
      "class",
      "optQuestion grid-2x2 animate__animated animate__slideInRight"
    );
    $("#question3-6").animate({ opacity: "1" }, "500ms");
    $("#bottomBtn3-6").fadeIn(500);
  });

  // ·············Q3-6·················
  // back to page3-5
  $("#prev3-6").click(function () {
    $("#question3-5").attr(
      "class",
      "optQuestion grid-2x5 animate__animated animate__slideInLeft"
    );
    $("#question3-5").animate({ opacity: "1" }, "500ms");
    $("#bottomBtn3-5").fadeIn(500);

    $("#question3-6").attr(
      "class",
      "optQuestion grid-2x2 animate__animated animate__slideOutRight"
    );
    $("#question3-6").animate({ opacity: "0" }, "500ms");
    $("#bottomBtn3-6").fadeOut(500);
  });
  // to page4-1
  $("#continueBtnInPage3").click(function () {
    var flag = 0;
    for (let index = 1; index <= 2; index++) {
      var state = $("#3-6-" + index).prop("checked");
      if (state == true) {
        flag = 1;
      }
    }
    if (flag == 0) {
      $("#prompt3-6").removeClass("hide");
    } else {
      $("#extra-background").attr("class", "extra-background page4");
      $("#page4-1").fadeIn(500);
      $("#page3-6").fadeOut(500);
      $("#page4-1").removeClass("hide");
      $("#question3-6").attr("class", "optQuestion grid-2x2");
      $("#question4-1").attr("class", "optQuestion grid-4x6");
      pageFlag = 4;
      $("#1").animate({ left: "0px" });
      $("#2").animate({ left: "34px" });
      $("#3").animate({ left: "68px" });
      $("#indicator").animate({ left: "102px" });
      $("#4").animate({ left: "136px" });
    }
  });
  // -------------page4----------------
  // ·············Q4-1·················
  // back to page3-6
  $("#backBtnInPage4").click(function () {
    $("#extra-background").attr("class", "extra-background page3");
    $("#question3-6").attr("class", "optQuestion grid-2x2");
    $("#page3-6").fadeIn(500);
    $("#page4-1").fadeOut(500);
    $("#question4-1").attr("class", "optQuestion grid-4x6");
    pageFlag = 3;
    $("#1").animate({ left: "0px" });
    $("#2").animate({ left: "34px" });
    $("#indicator").animate({ left: "68px" });
    $("#3").animate({ left: "102px" });
    $("#4").animate({ left: "136px" });
  });
  // to page4-2
  $("#next4-1").click(function () {
    $("#question4-1").attr(
      "class",
      "optQuestion grid-4x6 animate__animated animate__slideOutLeft"
    );
    $("#question4-1").animate({ opacity: "0" }, "500ms");
    $("#bottomBtn4-1").fadeOut(500);

    $("#page4-2").removeClass("hide");
    $("#question4-2").attr(
      "class",
      "optQuestion grid-4x6 animate__animated animate__slideInRight"
    );
    $("#question4-2").animate({ opacity: "1" }, "500ms");
    $("#bottomBtn4-2").fadeIn(500);
  });

  // ·············Q4-2·················
  // back to page4-1
  $("#prev4-2").click(function () {
    $("#question4-1").attr(
      "class",
      "optQuestion grid-4x6 animate__animated animate__slideInLeft"
    );
    $("#question4-1").animate({ opacity: "1" }, "500ms");
    $("#bottomBtn4-1").fadeIn(500);

    $("#question4-2").attr(
      "class",
      "optQuestion grid-4x6 animate__animated animate__slideOutRight"
    );
    $("#question4-2").animate({ opacity: "0" }, "500ms");
    $("#bottomBtn4-2").fadeOut(500);
  });
  // to page4-3
  $("#next4-2").click(function () {
    $("#question4-2").attr(
      "class",
      "optQuestion grid-4x6 animate__animated animate__slideOutLeft"
    );
    $("#question4-2").animate({ opacity: "0" }, "500ms");

    $("#page4-3").removeClass("hide");
    $("#question4-3").attr(
      "class",
      "optQuestion grid-4x6 animate__animated animate__slideInRight"
    );
    $("#question4-3").animate({ opacity: "1" }, "500ms");

    $("#bottomBtn4-2").css("display", "none");
    $("#bottomBtn4-3").css("display", "block");
  });

  // ·············Q4-3·················
  // back to page4-2
  $("#prev4-3").click(function () {
    $("#question4-2").attr(
      "class",
      "optQuestion grid-4x6 animate__animated animate__slideInLeft"
    );
    $("#question4-2").animate({ opacity: "1" }, "500ms");

    $("#question4-3").attr(
      "class",
      "optQuestion grid-4x6 animate__animated animate__slideOutRight"
    );
    $("#question4-3").animate({ opacity: "0" }, "500ms");

    $("#bottomBtn4-3").css("display", "none");
    $("#bottomBtn4-2").css("display", "block");
  });
  // to page4-4
  $("#next4-3").click(function () {
    $("#question4-3").attr(
      "class",
      "optQuestion grid-4x6 animate__animated animate__slideOutLeft"
    );
    $("#question4-3").animate({ opacity: "0" }, "500ms");
    $("#bottomBtn4-3").fadeOut(500);

    $("#page4-4").removeClass("hide");
    $("#question4-4").attr(
      "class",
      "optQuestion grid-2x5 animate__animated animate__slideInRight"
    );
    $("#question4-4").animate({ opacity: "1" }, "500ms");
    $("#bottomBtn4-4").fadeIn(500);
  });

  // ·············Q4-4·················
  // back to page4-3
  $("#prev4-4").click(function () {
    $("#question4-3").attr(
      "class",
      "optQuestion grid-4x6 animate__animated animate__slideInLeft"
    );
    $("#question4-3").animate({ opacity: "1" }, "500ms");

    $("#question4-4").attr(
      "class",
      "optQuestion grid-2x5 animate__animated animate__slideOutRight"
    );
    $("#question4-4").animate({ opacity: "0" }, "500ms");

    $("#bottomBtn4-4").css("display", "none");
    $("#bottomBtn4-3").css("display", "block");
  });
  // to page4-5
  $("#next4-4").click(function () {
    var flag = 0;
    for (let index = 1; index <= 5; index++) {
      var state = $("#4-4-" + index).prop("checked");
      if (state == true) {
        flag = 1;
      }
    }
    if (flag == 0) {
      $("#prompt4-4").removeClass("hide");
    } else {
      $("#question4-4").attr(
        "class",
        "optQuestion grid-2x5 animate__animated animate__slideOutLeft"
      );
      $("#question4-4").animate({ opacity: "0" }, "500ms");
      $("#bottomBtn4-4").fadeOut(500);

      $("#page4-5").removeClass("hide");
      $("#question4-5").attr(
        "class",
        "question animate__animated animate__slideInRight"
      );
      $("#question4-5").animate({ opacity: "1" }, "500ms");
      $("#bottomBtn4-5").fadeIn(500);
    }
  });

  // ·············Q4-5·················
  // back to page4-4
  $("#prev4-5").click(function () {
    $("#question4-4").attr(
      "class",
      "optQuestion grid-2x5 animate__animated animate__slideInLeft"
    );
    $("#question4-4").animate({ opacity: "1" }, "500ms");
    $("#bottomBtn4-4").fadeIn(500);

    $("#question4-5").attr(
      "class",
      "question animate__animated animate__slideOutRight"
    );
    $("#question4-5").animate({ opacity: "0" }, "500ms");
    $("#bottomBtn4-5").fadeOut(500);
  });
  // skip button
  $("#4-5").click(function () {
    $("#extra-background").attr("class", "extra-background page5");
    $("#page5-1").fadeIn(500);
    $("#page4-5").fadeOut(500);
    $("#page5-1").removeClass("hide");
    $("#question4-5").attr("class", "question");
    $("#question5-1").attr("class", "question");
    pageFlag = 5;
    $("#1").animate({ left: "0px" });
    $("#2").animate({ left: "34px" });
    $("#3").animate({ left: "68px" });
    $("#4").animate({ left: "102px" });
    $("#indicator").animate({ left: "136px" });
  });
  // to page5-1
  $("#continueBtnInPage4").click(function () {
    $("#extra-background").attr("class", "extra-background page5");
    $("#page4-5").fadeOut(500);
    $("#page5-1").fadeIn(500);
    $("#page5-1").removeClass("hide");
    $("#question4-5").attr("class", "question");
    $("#question5-1").attr("class", "question");
    pageFlag = 5;
    $("#1").animate({ left: "0px" });
    $("#2").animate({ left: "34px" });
    $("#3").animate({ left: "68px" });
    $("#4").animate({ left: "102px" });
    $("#indicator").animate({ left: "136px" });
  });

  // -------------page5----------------
  // ·············Q5-1·················
  // back to page4-5
  $("#backBtnInPage5").click(function () {
    $("#extra-background").attr("class", "extra-background page4");
    $("#question4-5").attr("class", "question");
    $("#page4-5").fadeIn(500);
    $("#page5-1").fadeOut(500);
    $("#question5-1").attr("class", "question");
    pageFlag = 4;
    $("#1").animate({ left: "0px" });
    $("#2").animate({ left: "34px" });
    $("#3").animate({ left: "68px" });
    $("#indicator").animate({ left: "102px" });
    $("#4").animate({ left: "136px" });
  });
  // skip button
  $("#5-1").click(function () {
    if (confirm("即将提交内容，确定提交吗？") == true) {
      $("#page5-1").fadeOut(500);
      $("#result").fadeIn(500);
      $("#result").removeClass("hide");
      $("#question5-1").attr("class", "question");
      $("#resultPage").attr("class", "resultArea grid-result");
      $("#1").animate({ left: "0px" });
      $("#2").animate({ left: "34px" });
      $("#3").animate({ left: "68px" });
      $("#4").animate({ left: "102px" });
      $("#indicator").animate({ left: "136px" });
      $("#indicatorGroup").attr(
        "class",
        "indicatorGroup animate__animated animate__slideOutDown"
      );
      $("#indicatorGroup").animate({ opacity: "0" }, "500ms");
    }
  });
  // to result page
  $("#next5-1").click(function () {
    if (confirm("即将提交内容，确定提交吗？") == true) {
      $("#page5-1").fadeOut(500);
      $("#result").fadeIn(500);
      $("#result").removeClass("hide");
      $("#question5-1").attr("class", "question");
      $("#resultPage").attr("class", "resultArea grid-result");
      $("#1").animate({ left: "0px" });
      $("#2").animate({ left: "34px" });
      $("#3").animate({ left: "68px" });
      $("#4").animate({ left: "102px" });
      $("#indicator").animate({ left: "136px" });
      $("#indicatorGroup").attr(
        "class",
        "indicatorGroup animate__animated animate__slideOutDown"
      );
      $("#indicatorGroup").animate({ opacity: "0" }, "500ms");
    }
  });

  // -------------result----------------
  // back to page5-1

  $("#prevInResultPage").click(function () {
    $("#question5-1").attr("class", "question");
    $("#page5-1").fadeIn(500);
    $("#result").fadeOut(500);
    $("#resultPage").attr("class", "resultArea grid-result");
    $("#1").animate({ left: "0px" });
    $("#2").animate({ left: "34px" });
    $("#3").animate({ left: "68px" });
    $("#4").animate({ left: "102px" });
    $("#indicator").animate({ left: "136px" });
    $("#indicatorGroup").attr(
      "class",
      "indicatorGroup animate__animated animate__slideInUp"
    );
    $("#indicatorGroup").animate({ opacity: "1" }, "500ms");
  });

  // complete and back to home
  $("#complete").click(function () {
    if (confirm("即将回首页，填写的内容将被清空，确定回首页吗？") == true) {
      window.location.reload();
    }
  });
});
