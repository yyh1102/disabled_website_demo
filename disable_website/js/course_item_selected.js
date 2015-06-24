/**
 * Created by asus-pc on 2015/6/15.
 */
$(document).ready(function(){
    for(var i=0;i<3;i++){
        add_selected_effect(i);
    }
    search_state_selected();
})

function add_selected_effect(n){
    var col=$(".info_box").eq(n);
    col.children().children().on("click",function(){
        var target=col.children().children(".item_selected");
        target.removeClass("item_selected");
        $(this).addClass("item_selected");

    })
}

function search_state_selected(){
    var parent=$(".filter");
    parent.children().on("click",function(){
        var target=parent.children(".selected");
        target.removeClass("selected");
        $(this).addClass("selected");

    })
}