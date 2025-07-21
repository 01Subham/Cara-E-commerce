const bar = document.getElementById('bar'); 
const nav = document.getElementById('nav_bar');
const close = document.getElementById('cross');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}
if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}






var main_product = document.getElementById("mainImg");
        var another_product = document.getElementsByClassName("small-img");

        another_product[0].onclick = function(){
            main_product.src = another_product[0].src;
        }
        another_product[1].onclick = function(){
            main_product.src = another_product[1].src;
        }
        another_product[2].onclick = function(){
            main_product.src = another_product[2].src;
        }
        another_product[3].onclick = function(){
            main_product.src = another_product[3].src;
        }