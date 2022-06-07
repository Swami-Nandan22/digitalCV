$(document).ready(function(){
    $('#profile_ripple').ripples({
        resolution: 512,
        dropRadius:10
    });

});
const counters = document.querySelectorAll('.counter');
console.log(counters);
function  runCounter(){
    counters.forEach(counter => {
       counter.innerText=0;
       let target =  +counter.dataset.count;
       let countIt = function( ){
           let displayedCount   =  +counter.innerText;
           if (displayedCount   <     target) {
               counter.innerText=displayedCount+1;
               setTimeout(countIt,50);
            }
           else{
               counter.innerText=target;
            }
        }
        countIt();
    })
    
}
// runCounter();
let counterSection = document.querySelector('.counter_section');
let options = {
    rootMargin : '0px 0px -100px 0px'
}
let done=0;
const selectionObserver = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting && done!=1) {
        runCounter();
    }
},options)
selectionObserver.observe(counterSection);

var $wrapper = $('.portfolio_wrapper');





$wrapper.isotope({
    filter : '*',
    layoutMode: 'masonry',
    animationOptions : {
        duration : 750,
        easing:' linear '
    }
});
let links = document.querySelectorAll('.tabs a');
links.forEach(links => {
    let selector = link.dataset.filter
    links.addEventListener('click', function(e){
        e.preventDefault();
        $wrapper.isotope({
            filter : selector,
            layoutMode: 'masonry',
            animationOptions : {
                duration : 750,
                easing:' linear '
            }
        });
        e.target.classList.add('active');
    });
})

$('.magnify').magnificPopup({
    type: 'image',
    gallery: {
        enabled : true
    },
    zoom : {
        enabled: true
    }
})