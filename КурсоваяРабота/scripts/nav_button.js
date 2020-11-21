//// подсвечивает ваше местоположение на окне навигации
//window.addEventListener("scroll",function(){
//    let first = document.getElementById('PrSi_nav');
//    let second = document.getElementById('PaSi_nav');
//    let third = document.getElementById('FuSi_nav');
//    
//    let scrollTop = document.documentElement.scrollTop; // скролл в данное мгновение
//    let scrollHeight = document.body.scrollHeight- document.documentElement.clientHeight;// максимально возможный скролл!
//        //scrollHeight - максимально возможный скролл, но мы не за гранью этой страницы (не сверху), поэтому нужно вычесть высоту видимой страницы (clientHeight)
//    
//    if (scrollHeight/3>= scrollTop){
////        first.style = "color:#4f96db;";
////        second.style = "color:black;";
////        third.style = "color:black;";
//        first.classList.add("teory_href_now");
//        second.classList.remove("teory_href_now");
//        third.classList.remove("teory_href_now");
//    }
//    else if(scrollHeight/3 < scrollTop  &&  scrollHeight/3*2 >= scrollTop){
////        first.style = "color:black;";
////        second.style = "color:#4f96db;";
////        third.style = "color:black;";
//        first.classList.remove("teory_href_now");
//        second.classList.add("teory_href_now");
//        third.classList.remove("teory_href_now");
//    
//    console.log(scrollHeight * 0.33);
//    console.log(scrollTop);
//    }else if(scrollHeight/3*2 < scrollTop){
////        first.style = "color:black;";
////        second.style = "color:black;";
////        third.style = "color:#4f96db;";
//        first.classList.remove("teory_href_now");
//        second.classList.remove("teory_href_now");
//        third.classList.add("teory_href_now");
//    }    
//    
//})



//window.addEventListener("scroll",function(){
//    let scrollTop = document.documentElement.scrollTop; // скролл в данное мгновение
//    
//    if(scrollTop>100){
//        
//    }
//}



function elementInViewport(el){
    var bounds = el.getBoundingClientRect();
    return (
        (bounds.top + bounds.height > 0) && // Елемент ниже верхней границы
        (window.innerHeight - bounds.top > 0) && // Выше нижней
        (bounds.left + bounds.width > 0) && // Правее левой
        (window.innerWidth - bounds.left > 0)// Левее правой
    );
}


document.addEventListener("scroll", (e) => {
    let first = document.getElementById('first');
    let second = document.getElementById('second');
    let third = document.getElementById('third');
    let f = document.getElementById('f');
    let s = document.getElementById('s');
    let t = document.getElementById('t');
    if(elementInViewport(third)){
        f.classList.remove('teory_href_now');
        s.classList.remove('teory_href_now');
        t.classList.add('teory_href_now');
    }else if(elementInViewport(second)){
        f.classList.remove('teory_href_now');
        s.classList.add('teory_href_now');
        t.classList.remove('teory_href_now');
    } else{
        f.classList.add('teory_href_now');
        s.classList.remove('teory_href_now');
        t.classList.remove('teory_href_now');
    }

})