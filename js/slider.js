// function setWidth() {
//   let widthTool = $(".tab-tilte > .tool");
//   let curWidth = $(".tab-tilte .title.active").outerWidth();
//   const arrTitle = [];
//   $(".tab-tilte .title").each(function (index) {
//     arrTitle.push($(this).outerWidth());
//     if ($(this).hasClass("active")) {
//       if (index !== 0) {
//         arrTitle.pop();
//         const total = arrTitle.reduce((prev, cur) => prev + cur, 0);
//         $(".tab-tilte > .tool").animate({
//           left: total,
//         });
//       } else {
//         $(".tab-tilte > .tool").animate({
//           left: 0,
//         });
//       }
//       widthTool.css("width", curWidth);
//     }
//   });
// }
// setWidth();
// $(".tab-tilte > .title").click(function (event) {
//   event.stopPropagation();
//   $(".tab-tilte > .title").removeClass("active");
//   $(this).addClass("active");
//   setWidth();
//   const data = $(this).data();
//   $(".tab-content").css("display", "none");
//   $(`#${data.ref}`).fadeIn();
// });

// const bntAll =  document.getElementById('all');
// const btnProgram = document.getElementById('program');
// const btnLangue = document.getElementById('language');

// const divAll =  document.getElementById('tab-all');
// const divProgram = document.getElementById('tab-program');
// const divLangue= document.getElementById('tab-language');

// bntAll.onclick = function(){
//   divProgram.style.display='none'
//   divLangue.style.display='none'
//   divAll.style.display="block"
//   // lineTabs.style.left='0px'
// }
// btnProgram.onclick = function(){
//   console.log('hihi');
//   divLangue.style.display = 'none'
//   divAll.style.display='none'
//   divProgram.style.display='block'
//   // lineTabs.style.left='455px'
// }


// bntAll.onclick = function(){
//   divUser.style.display = 'none'
//   divCategory.style.display='none'
//   divAction.style.display='block'
//   lineTabs.style.left='955px'
// }

$(".card-img-top").click(function (event) {
  event.stopPropagation();
  event.preventDefault();
});

//=======================================================================
// 