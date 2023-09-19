const icons = document.querySelector('.moving-box');
const shareIcon = document.querySelector(`.icon-share`)
const shareBox = document.querySelector('.icon-box')
function showIcons(){
    if(icons.classList.contains(`active`)){
        icons.style.display="none";
        icons.classList.remove(`active`);
        shareIcon.classList.remove('icon-invert')
        shareBox.classList.remove('icon-box-active')
        
    }else{
        icons.style.display="block";
        icons.classList.add(`active`);
        shareIcon.classList.add('icon-invert')
        shareBox.classList.add('icon-box-active')
        
    }
}