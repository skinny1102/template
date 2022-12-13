$("#menu").click(function () {
  $(".modal").animate(
    {
      left: "0",
    },
    500
  );
});
$(".close").click(function () {
  $(".modal").animate(
    {
      left: "-110%",
    },
    500
  );
});

$('.slider-index-tab').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false
});
$('.slider-index-tab-one').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false
});