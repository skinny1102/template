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
const list_defind = {
  1:"list-one",
  2:"list-two"
}

const angleup_btn = document.getElementsByClassName('angle-item-up');
for (let i = 0; i < angleup_btn.length; i++) {
  const element = angleup_btn[i];
  console.log(element , i);
  element.onclick=function(){
    const list = document.getElementById(list_defind[i+1])
    list.classList.toggle('isDisplay')
  }
  
}

var player = videojs('my-player');
player.addClass('vjs-matrix');
         // Adding button to the control bar
         var myButton = player.controlBar.addChild('button', {}, 0);
         
         // Create our button's DOM Component
var myButtonDom = myButton.el();
    
myButtonDom.innerHTML = '<span class="vjs-icon-forward"></span>';

forward=()=>{
  skip(15);
}

backward=()=>{
   skip(-15);
}
