var anh = document.getElementById("anh");
var em = document.getElementById("em");
var anh2 = document.getElementById("anh2");
var em2 = document.getElementById("em2");  
var anh1 = document.getElementById("anh1");
var em1 = document.getElementById("em1"); 
var anh3 = document.getElementById("anh3");
var em3 = document.getElementById("em3");
var anh4 = document.getElementById("anh4");
var em4 = document.getElementById("em4");
function validate() {    
    if (anh.value.length == 0) {
        em.style.color = "purple";
        em.innerHTML = "* Xin nhập tài khoản";
        } else if (anh.value.length < 7) {
        em.style.color = "red";
        em.innerHTML = "* Tài khoản không đúng";
        } else {
        em.style.color = "green";
        em.innerHTML = "Tài khoản hợp lệ";
        }
    var i = 0;
    for(i = 0;i < anh.value.length;i ++){
        if (anh.value[i] == " ") {
            em.style.color = "purple";
            em.innerHTML = "* Không được có ký tự khoảng trắng";
        }
    }  
}
function validate2() {      
    if (anh2.value.length == 0) {
        em2.style.color = "purple";
        em2.innerHTML = "* Xin nhập tài khoản";
        } else if (anh2.value.length < 7) {
        em2.style.color = "red";
        em2.innerHTML = "* Tài khoản không đúng";
        } else {
        em2.style.color = "green";
        em2.innerHTML = "Tài khoản hợp lệ";
        }
    var i = 0;
    for(i = 0;i < anh2.value.length;i ++){
        if (anh2.value[i] == " ") {
            em2.style.color = "purple";
            em2.innerHTML = "* Không được có ký tự khoảng trắng";
        }
    }         
}
function validate1() {       
    if (anh1.value.length == 0) {
        em1.style.color = "purple";
        em1.innerHTML = "* Xin nhập tài khoản";
        } else if (anh1.value.length < 7) {
        em1.style.color = "red";
        em1.innerHTML = "* Tài khoản không đúng";
        } else {
        em1.style.color = "green";
        em1.innerHTML = "Tài khoản hợp lệ";
        }
    var i = 0;
    for(i = 0;i < anh1.value.length;i ++){
        if (anh1.value[i] == " ") {
            em1.style.color = "purple";
            em1.innerHTML = "* Không được có ký tự khoảng trắng";
        }
    }         
}
function validate3() {        
    if (anh3.value.length == 0) {
        em3.style.color = "purple";
        em3.innerHTML = "* Xin nhập tài khoản";
        } else if (anh3.value.length < 7) {
        em3.style.color = "red";
        em3.innerHTML = "* Tài khoản không đúng";
        } else {
        em3.style.color = "green";
        em3.innerHTML = "Tài khoản hợp lệ";
        } 
    var i = 0;
    for(i = 0;i < anh3.value.length;i ++){
        if (anh3.value[i] == " ") {
            em3.style.color = "purple";
            em3.innerHTML = "* Không được có ký tự khoảng trắng";
        }
    }        
}
function validate4() {
    if (anh4.value.length == 0) {
        em4.stye.color = "purple";
        em4.innerHTML = "* Xác nhận mật khẩu";
    }
    if (anh4.value === anh3.value) {
        em4.style.color = "green";
        em4.innerHTML = "Mật khẩu chính xác";
    } else {
        em4.style.color = "red";
        em4.innerHTML = "Mật khẩu chưa chính xác";
    }
    var i = 0;
    for(i = 0;i < anh4.value.length;i ++){
        if (anh4.value[i] == " ") {
            em4.style.color = "purple";
            em4.innerHTML = "* Không được có ký tự khoảng trắng";
        }
    }  
}
function myFunction() {
    if (em.style.color == "red" || em1.style.color == "red" || em2.style.color == "red" || em3.style.color == "red" || em4.style.color == "red") {
        alert("Bạn nhập chưa chính xác");
    if (anh.value.length == 0) {
        em.style.color = "purple";
        em.innerHTML = "* Xin nhập tài khoản";
    }
    if (anh1.value.length == 0) {
        em1.style.color = "purple";
        em1.innerHTML = "* Xin nhập tài khoản";
    }
    if (anh2.value.length == 0) {
        em2.style.color = "purple";
        em2.innerHTML = "* Xin nhập tài khoản";
    }
    if (anh3.value.length == 0) {
        em3.style.color = "purple";
        em3.innerHTML = "* Xin nhập tài khoản";
    }
    if (anh4.value.length == 0) {
        em4.style.color = "purple";
        em4.innerHTML = "* Xin nhập tài khoản";
    }
}
}