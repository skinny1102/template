const btnChosseAvatar = document.getElementById('update-image-text');
btnChosseAvatar.onclick=function(){
    const inputFile = document.getElementById('input-file');
    inputFile.click();
}

const bntUser =  document.getElementById('user-tab');
const btnCategory = document.getElementById('category-tab');
const btnAction= document.getElementById('action-tab');

const divUser =  document.getElementById('user-register');
const divCategory = document.getElementById('category-register');
const divAction= document.getElementById('action-register');

const lineTabs = document.getElementById('line-tabs');
if (window.matchMedia('screen and (max-width: 1324px)').matches){
    bntUser.onclick = function(){
        divCategory.style.display='none'
        divAction.style.display='none'
        divUser.style.display="block"
    }
    btnCategory.onclick = function(){
        divUser.style.display = 'none'
        divAction.style.display='none'
        divCategory.style.display='block'
    }
    
    
    btnAction.onclick = function(){
        divUser.style.display = 'none'
        divCategory.style.display='none'
        divAction.style.display='block'
    }
}else{
    bntUser.onclick = function(){
        divCategory.style.display='none'
        divAction.style.display='none'
        divUser.style.display="block"
        lineTabs.style.left='0px'
    }
    btnCategory.onclick = function(){
        divUser.style.display = 'none'
        divAction.style.display='none'
        divCategory.style.display='block'
        lineTabs.style.left='455px'
    }
    
    
    btnAction.onclick = function(){
        divUser.style.display = 'none'
        divCategory.style.display='none'
        divAction.style.display='block'
        lineTabs.style.left='955px'
    }
}
