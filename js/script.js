"use strict";
const circle = document.querySelector('.circle');
const counter = document.querySelector('.result span');

function count(number){
    if(!document.documentElement.classList.contains('showresult')){
        counter.innerHTML = number;
        setTimeout(count, 1000, ++number)
    }
}

document.addEventListener('keyup', function(event){
    if(event.code === 'Enter'){
        circle.classList.add('_active');
        circle.addEventListener('mouseenter', function(){
            count(0)
            circle.classList.add('playing')
            if(circle.classList.contains('playing')){
                circle.addEventListener('mouseleave', function(){
                    document.documentElement.classList.add('showresult')
                    lost()
                    setTimeout(remove2, 500);
                })
            } 
        })
        
    }
})

function remove2 (){
    circle.classList.remove('_active')
}
function lost (){
    circle.classList.remove('playing')
};
const buttons = document.querySelectorAll('.difficulty__button[data-addClass]');

if(buttons.length>0){
    buttons.forEach(button => {
        button.addEventListener('click', function(event){
            buttons.forEach(item => {
                circle.classList.remove(item.getAttribute('data-addclass'))
            })
            let target = event.target;
            circle.classList.add(target.getAttribute('data-addclass'));
        })
    })
}
document.addEventListener('click', function(event){
    if(event.target.closest('.result__button')){
        this.documentElement.classList.remove('showresult')
    }
})
