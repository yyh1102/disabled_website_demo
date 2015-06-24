/**
 * Created by asus-pc on 2015/6/15.
 */
$(document).ready(function(){
    var hide=0;
    $(".select_city").on("click",function() {
        $(".city_box").show(200);
        hide = 1;
    });
    var out=0;
    $(".select_city").mouseleave(function(){
        out=1;
    });
    $(".select_city").mouseenter(function(){
        out=0;
    });
    $("body").on("click",function(){
       if(out){
           $(".city_box").hide(200);
       }
    });
})