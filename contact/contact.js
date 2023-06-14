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

// mail
function sendEmail() {
    window.location.href = "mailto:" + "thecake@gmail.com";
  }

  
// map
function initMap() {
  var myLatLng = {lat: 21.0288677865261, lng: 105.78227688851439}; // Tọa độ kinh độ và vĩ độ của điểm trung tâm bản đồ
  var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 12, // Mức độ phóng to ban đầu của bản đồ
  center: myLatLng // Điểm trung tâm bản đồ
  });
  var marker = new google.maps.Marker({
  position: myLatLng,
  map: map,
  title: 'Đây là điểm trung tâm!' // Tiêu đề của marker
  });
};



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


   //validate
   // validate mail
function validateEmail(email) {
  var regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  return regex.test(email);
}

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

// validate form
var form = document.getElementById("myform");
var submit = document.getElementById("sendfb");
form.addEventListener("submit", function(event) {
  event.preventDefault();

  var name = document.getElementById("name");
  var phone = document.getElementById("phone");
  var email = document.getElementById("email");
  var mess = document.getElementById("mess");
  
  var nameError = document.querySelector('#nameError');
  var phoneError = document.querySelector('#phoneError');
  var emailError = document.querySelector('#emailError');
  var messError = document.querySelector('#messError');

  



  
   //Hiện thông báo nếu lỗi
  if (name.value === "" ) {
      name.classList.add("error");
      nameError.innerHTML = "Name cannot be empty"
      nameError.style.display = 'block';
  } else if(/[^a-zA-ZÀ-ỹà-ỹ ]/.test(name.value)){
      name.classList.add("error");
      nameError.innerHTML = "Invalid name input"
      nameError.style.display = 'block';
  }else{
      name.classList.remove("error");
      nameError.style.display = 'none';
  }


  if (phone.value === '' ) {
      phone.classList.add("error");
      phoneError.innerHTML = "Phone cannot be empty"
      phoneError.style.display = 'block';

  }else if (/\D/.test(phone.value) || !validatePhoneNumber(phone.value)  ) {
      phone.classList.add("error");
      phoneError.innerHTML = "Invalid Phone input"
      phoneError.style.display = 'block';
  }else{
      phone.classList.remove("error");
      phoneError.style.display = 'none';
  }


  if (email.value === "" ) {
      email.classList.add("error");
      emailError.innerHTML = "Email cannot be empty"
      emailError.style.display = 'block';
  }else if (!validateEmail(email.value)) {
      email.classList.add("error");
      emailError.innerHTML = "Invalid email input"
      emailError.style.display = 'block';
  }else{
      email.classList.remove("error");
      emailError.style.display = 'none';
  }

  if (mess.value === "" ) {

    mess.classList.add("error");
    messError.innerHTML = "First name cannot be empty"
    messError.style.display = 'block';
  }else{
    mess.classList.remove("error");
    messError.style.display = 'none';
  }

  //dừng nếu lỗi
  if (name.value === "" || /[^a-zA-ZÀ-ỹà-ỹ ]/.test(name.value) || phone.value === '' || /\D/.test(phone.value) || !validatePhoneNumber(phone.value) || email.value === "" || !validateEmail(email.value) || mess.value === "" ) {
      return;
  }
  



  alert("Send Feedback Success");
});
