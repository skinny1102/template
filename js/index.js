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
const btn = document.getElementById('avatar-index');
btn.onclick= function(){
  const div = document.getElementById('avatar-dropdown');
  div.classList.toggle('display-flex')
}
$('.slider-index-tab').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: $('.left'),
  nextArrow:$('.right'),
});
