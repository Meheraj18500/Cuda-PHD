$(document).ready(function(){
    
    //sticky manu
    $(".js--services-section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
           } else{
            $("nav").removeClass("sticky");
           }
    });
    //active link
    $("nav .main-nav li").click(function(){
        $("nav .main-nav li").removeClass("active");
        $(this).addClass("active");
    });
    $("nav a .logo").click(function(){
        $("nav .main-nav li").removeClass("active");
        $("nav .main-nav li:first-child").addClass("active");
    });
    
    //Scroll active link
    $(".js--services-section").waypoint(function(direction){
        if (direction == "up"){
            $("nav .main-nav li").removeClass("active");
            $("nav .main-nav li:first-child").addClass("active");
           } else{
            $("nav .main-nav li:first-child").removeClass("active");
           }
    });
    
    //mixitup (portfolio-section)
    var mixer = mixitup(".container");
});

function openNav() {
    document.getElementById("myNav").style.width = ("100%");
}
function closeNav() {
    document.getElementById("myNav").style.width = ("0%");
}