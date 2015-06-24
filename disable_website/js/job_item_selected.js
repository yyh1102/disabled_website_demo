/**
 * Created by asus-pc on 2015/6/15.
 */
$(document).ready(function(){
    for(var i=0;i<4;i++){
        add_selected_effect(i);
    }
})

function add_selected_effect(n){
    var col=$(".info_box").eq(n);
    col.children().children().on("click",function(){
        var target=col.children().children(".item_selected");
        target.removeClass("item_selected");
        $(this).addClass("item_selected");
    })
}
