function setWidth() {
  let widthTool = $(".tab-tilte > .tool");
  let curWidth = $(".tab-tilte .title.active").outerWidth();
  const arrTitle = [];
  $(".tab-tilte .title").each(function (index) {
    arrTitle.push($(this).outerWidth());
    if ($(this).hasClass("active")) {
      if (index !== 0) {
        arrTitle.pop();
        const total = arrTitle.reduce((prev, cur) => prev + cur, 0);
        $(".tab-tilte > .tool").animate({
          left: total,
        });
      } else {
        $(".tab-tilte > .tool").animate({
          left: 0,
        });
      }
      widthTool.css("width", curWidth);
    }
  });
}
setWidth();
$(".tab-tilte > .title").click(function (event) {
  event.stopPropagation();
  $(".tab-tilte > .title").removeClass("active");
  $(this).addClass("active");
  setWidth();
  const data = $(this).data();
  $(".tab-content").css("display", "none");
  $(`#${data.ref}`).fadeIn();
});

$(".card-img-top").click(function (event) {
  event.stopPropagation();
  event.preventDefault();
});

//=======================================================================
// 