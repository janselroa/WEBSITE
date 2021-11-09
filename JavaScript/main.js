var menu = document.getElementById('menu');
var altura = menu.offsetTop;

window.addEventListener('scroll', function(){
    if(window.pageYOffset > altura){
        menu.classList.add('fixed-1');
        menu.classList.add('barra1');
    }
    if(this.window.pageYOffset == 0){
        menu.classList.remove('fixed-1');
        menu.classList.remove('barra1');
    }
});