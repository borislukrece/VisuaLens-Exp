$(document).ready(function () {
  $(".item").hover(
    function () {
      const src = $(this).find("img").attr("src");

      $("body").css({
        background: `url(${src})`,
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center",
        "-webkit-backdrop-filter": "blur(4px)",
        "backdrop-filter": "blur(4px)",
        transition: "all 0.5s ease",
      });
    },
    function () {
      $("body").css({
        background: `url('./assets/img/back.jpeg')`,
        "background-size": "cover",
        "background-repeat": "no-repeat",
        "background-position": "center",
        "-webkit-backdrop-filter": "blur(4px)",
        "backdrop-filter": "blur(4px)",
        transition: "all 0.5s ease",
      });
    }
  );

  const text = $(".circle").html();
  const splitText = text.trim().split("");
  $(".circle").html("");

  splitText.forEach((char, index) => {
    $(".circle").append(
      `<span style="transform: translateY(-50%) rotateZ(${
        (index + 1) * 10
      }deg)"> ${char} </span>`
    );
  });

  $(".btn").click(function () {
    $(".item").removeClass("itemHide").addClass("itemHide");
    $(this).removeClass("btnHide").addClass("btnHide");
    $("#imageLists img").removeClass("hide-item-SV");
    $(".second-view").removeClass("show").addClass("show");
  });
});

$("#imageContainer").on("click", function (event) {
  if (!$(event.target).closest("#imageLists").length) {
    $(".item").removeClass("itemHide");
    $(".btn").removeClass("btnHide");
    $("#imageLists img").addClass("hide-item-SV");
    $(".second-view").removeClass("show").addClass("hide");
  }
});
