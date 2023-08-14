const switchTheme = document.querySelector('#switchtheme');

const theme = document.querySelector('.body');
// const light = theme.querySelectorAll('.active');

// switchTheme.addEventListener("change",()=>{

//     for (let i = 0; i < light.length; i++) {
//         if(switchTheme.checked){
//             theme.classList.add('active');
//             light[i].classList.add('light');
            
//         } else {
//             theme.classList.remove('active');
//             light[i].classList.remove('light');
            
//         }
//     }
// })

// window.onload = function(){

//     if(switchTheme.checked){
//         return false;
//     }
// }

switchTheme.addEventListener('change', ()=>{
    if(switchTheme.checked){
        theme.classList.add("light");
    } else {
        theme.classList.remove("light");
    }
})