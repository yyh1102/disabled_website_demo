/**
 * Created by asus-pc on 2015/6/13.
 */
document.write("<div class='header'>"
    +"<div class='navBar'>"
    +"<ul>"
    +"<li><a href='http://www.yueliangquan.com/index.html'>首页</a></li>"
    +"<li><a href='http://www.yueliangquan.com/docs/course.html'>全部课程</a></li>"
    +"<li><a href='http://www.yueliangquan.com/docs/recruit.html'>企业招聘</a></li>"
    +"<li><a href='http://www.yueliangquan.com/docs/activity.html'>近期活动</a></li>"
    +"</ul>"
    +"</div>"
    +"<div class='header_right fr'>"
    +"<div class='search fl'>"
    +"<span class='glyphicon glyphicon-search fl' ></span>"
    +"<input type='search' name='search' class='fl'>"
    +"</div>"
    +"<div class='login_box fl'>"
    +"<a href='#' class='login' data-toggle='modal' data-target='#LoginModal'>[登录]</a>"
    +"<a href='#' class='register' data-toggle='modal' data-target='#LoginModal'>[注册]</a>"
    +"</div>"
    +"<a href='#'><span class='glyphicon glyphicon-user user fl' alt='个人资料'></span></a>"
    +"</div>"
    +"</div>"
)

//  Modal

document.write(
    " <div class='modal fade' id='LoginModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>"
+"<div class='modal-dialog'>"
+"<div class='modal-content'>"
+"<div class='modal-header' style='background-color: #00b050;'>"
+"<button type='button' class='close'data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>"
+"<h4 class='modal-title' id='myModalLabel'>欢迎</h4>"
+"</div>"
+"<div class='modal-body'>"
+"<form>"
+ "<div class='form-group'> "
+"<label for='exampleInputEmail1'>电子邮箱</label>"
+"<input type='email' class='form-control' id='exampleInputEmail1' placeholder='Enter email'>"
+"</div>"
+"<div class='form-group'>"
+"<label for='exampleInputPassword1'>密码</label>"
+"<input type='password' class='form-control' id='exampleInputPassword1' placeholder='Password'>"
+"</div>"
+"</form>"
+"</div>"
+"<div class='modal-footer' style='background-color: #00b050;'>"
+"<button type='button' class='btn btn-default' data-dismiss='modal'>取消</button>"
+"<button type='button' class='enter'>确认</button>"
+"</div>"
+"</div>"
+"</div>"
+"</div>");

$(document).ready(function(){
    setInterval(function(){
        $("body").css({
            "padding-right":"0px"
        });
    },1)
})
//抵消激活模态框后body出现的padding-right