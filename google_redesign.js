const settings = document.querySelector('.setting');
const display_setting = document.querySelector('.before_setting')
console.log(display_setting);
settings.addEventListener("click", function(){

    if(display_setting.style.display === 'flex' ){
        display_setting.style.display ='none' ;
    }else{
        display_setting.style.display = 'flex';
    };
});

const dots_nine = document.querySelector('#dots-nine');
const display_dot = document.querySelector('.before_dots-nine');

dots_nine.addEventListener("click", function(){
    
    if(display_dot.style.display === 'flex'){
        display_dot.style.display = 'none';
    }else{
        display_dot.style.display = 'flex';
    };
});