// header
let navbar = document.querySelector('.a-navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

// user
document.querySelector('#user').addEventListener('click',function(){
    document.querySelector('.user').classList.toggle('hiden')
})

// sticky
var header = document.querySelector(".header")
		window.addEventListener("scroll",function(){
			x = window.pageYOffset
			// console.log(x)
			if(x>0){
				header.classList.add("sticky")
			}
			else{
				header.classList.remove("sticky")
			}
		})


// validate mail
function validateEmail(email) {
    var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    return regex.test(email);
  }

// validate form
var form = document.getElementById("myform");
// var submit = document.getElementById("register");
form.addEventListener("submit", function(event) {
    event.preventDefault();

// validate SĐT
function validatePhoneNumber(phoneNumber) {
    // Biểu thức chính quy kiểm tra số điện thoại
    var phoneRegex = /^\d{10,}$/;
  
    if (phoneRegex.test(phoneNumber)) {
      // Số điện thoại hợp lệ
      return true;
    } else {
      // Số điện thoại không hợp lệ
      return false;
    }
  }

    var us = document.getElementById("us");
    var pass = document.getElementById("pass");
    var passagain = document.getElementById("passagain");
    var phone = document.getElementById("phone");
    var email = document.getElementById("email");
    
    var usError = document.querySelector('#usError');
    var passError = document.querySelector('#passError');
    var passagainError = document.querySelector('#passagainError');
    var phoneError = document.querySelector('#phoneError');
    var emailError = document.querySelector('#emailError');

    

    //Hiện thông báo nếu lỗi
    if (us.value === "") {
        us.classList.add("error");
        usError.textContent = "UserName cannot be empty"
        usError.style.display = 'inline'
    }else{
        us.classList.remove("error");
        usError.style.display = 'none'
    }
  
    if (pass.value === "") {
        pass.classList.add("error");
        passError.textContent = "Password cannot be empty"
        passError.style.display = 'block'
    }else{
        pass.classList.remove("error");
        passError.style.display = 'none'
    }
  
    if (passagain.value === "") {
        passagain.classList.add("error");
        passagainError.textContent = "Password cannot be empty"
        passagainError.style.display = 'block'
    }else if (passagain.value !== pass.value) {
        passagain.classList.add("error");
        passagainError.textContent = "Re-enter password does not match"
        passagainError.style.display = 'block'
    }else{
        passagain.classList.remove("error");
        passagainError.style.display = 'none'
    }


    if (phone.value === '' ) {
        phone.classList.add("error");
        phoneError.textContent = "Phone cannot be empty"
        phoneError.style.display = 'block'
    }else if (/\D/.test(phone.value) || !validatePhoneNumber(phone.value) ) {
        phone.classList.add("error");
        phoneError.textContent = "Invalid Phone input"
        phoneError.style.display = 'block'
    }else{
        phone.classList.remove("error");
        phoneError.style.display = 'none'
    }

    if (email.value === "" ) {
        email.classList.add("error");
        emailError.textContent = "Email cannot be empty"
        emailError.style.display = 'block'
    }else if (!validateEmail(email.value)) {
        email.classList.add("error");
        emailError.textContent = "Invalid Email input"
        emailError.style.display = 'block'

    }else{
        email.classList.remove("error");
        emailError.style.display = 'block'
    }

    
    // nếu lỗi dung
    if (us.value === "" || pass.value === ""|| passagain.value === "" || passagain.value !== pass.value || phone.value === '' || /\D/.test(phone.value) || !validatePhoneNumber(phone.value)|| email.value === "" || !validateEmail(email.value) ) {
        return;
    }




    alert("Register Success");
    window.location.href = "../login/login.html";	
  });
  
  
  
// cart number
const danhSachSanPham = JSON.parse(localStorage.getItem("danhSachSanPham")) || [];

let number = tinhTongSoLuongSanPham(danhSachSanPham);

function tinhTongSoLuongSanPham(danhSachSanPham) {
let tongSoLuong = 0;

danhSachSanPham.forEach(function (sanPham) {
    tongSoLuong += parseInt(sanPham.quantity) ;
});

return tongSoLuong;
}
if(number == 0){
document.querySelector('.numbercart').style.display = 'none';
}
document.querySelector('.numbercart').innerHTML = number;