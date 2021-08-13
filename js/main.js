//active Navbar
let nav=document.querySelector(".navigation-wrap");
window.onscroll=function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}

//counter design
document.addEventListener('DOMContentLoaded',()=>{
    function counter(id,start,end,duration){
 let obj=document.getElementById(id),
   current=start,
   range=end-start,
   increment=end > start ? 1:-1,
   step=Math.abs(Math.floor(duration/range)),
   timer=setInterval(()=>{
       current += increment;
       obj.textContent=current;
       if(current==end){
           clearInterval(timer);
       }
    },step);

    }
    counter("count1",0,2286,3000);
    counter("count2",0,2376,3000);
    counter("count3",0,2286,3000);
    counter("count4",0,2583,3000);
});


//hide navbar
let navbar=document.querySelectorAll(".nav-link");
let navbarCollbase=document.querySelector( ".navbar-collapse .collapse");
navbar.forEach(function(a){
    a.addEventListener('click',function(){
        navbarCollbase.classList.remove('show');
    })
})
