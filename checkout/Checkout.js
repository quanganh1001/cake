const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

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


let coupon = $("#coupon");

coupon.addEventListener("click",function() {
    if($(".coupon_detail").classList.contains("hidden")){
        $(".coupon_detail").classList.remove("hidden");    
    }else{
        $(".coupon_detail").classList.add("hidden");    
    }
});


let applycoupon = $("#applycoupon")
var inputcoupon = document.getElementById("inputcoupon");
var couponErorr = document.getElementById("couponErorr");

applycoupon.addEventListener("click",function() {
    event.preventDefault();
    if (inputcoupon.value === ""){
        inputcoupon.classList.add("error");
        $(".success").classList.add("hidden");
        $(".coupon_detail").classList.remove("hidden");
        couponErorr.innerHTML="Coupon cannot be empty"
        couponErorr.style.display="block"
    }
    else if(inputcoupon.value !== ""){
        inputcoupon.classList.remove("error");
        $(".success").classList.remove("hidden");
        $(".coupon_detail").classList.add("hidden");
        couponErorr.style.display="none"
    }
});



var radioButtons = document.querySelectorAll('input[name="tick"]');
    
function handleRadioChange(event) {
    if (event.target.checked) {
    let target = event.target.parentNode.parentNode;
    var childElement = target.querySelector('.payment_text');
    radioButtons.forEach(function(input) {
        if (input !== event.target) {
            let x = input.parentNode.parentNode;
            var childElementx = x.querySelector('.payment_text');
            childElementx.classList.add('hidden');
        } else {
            childElement.classList.remove('hidden');
        }
        });
    }
}

radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', handleRadioChange);
});


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
var submit = document.getElementById("place_order");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    var lname = document.getElementById("lname");
    var fname = document.getElementById("fname");
    var country = document.getElementById("country");
    var street = document.getElementById("street-house");
    var postcode = document.getElementById("Postcode");
    var phone = document.getElementById("Phone ");
    var email = document.getElementById("Email");
    
    var lnameError = document.querySelector('#lnameError');
    var fnameError = document.querySelector('#fnameError');
    var countryError = document.querySelector('#countryError');
    var streetError = document.querySelector('#streetError');
    var postError = document.querySelector('#postError');
    var phoneError = document.querySelector('#phoneError');
    var emailError = document.querySelector('#emailError');
    



    
     //Hiện thông báo nếu lỗi
    if (fname.value === "" ) {
        console.log('d')
        fname.classList.add("error");
        fnameError.innerHTML = "First name cannot be empty"
        fnameError.style.display = 'block';
    } else if(/[^a-zA-ZÀ-ỹà-ỹ ]/.test(fname.value)){
        fname.classList.add("error");
        fnameError.innerHTML = "Invalid firt name input"
        fnameError.style.display = 'block';
    }else{
        fname.classList.remove("error");
        fnameError.style.display = 'none';
    }

    
    if (lname.value === "") {
        lname.classList.add("error");
        lnameError.innerHTML = "Last name cannot be empty"
        lnameError.style.display = 'block';
    }else if (/[^a-zA-ZÀ-ỹà-ỹ ]/.test(lname.value)) {
        lname.classList.add("error");
        lnameError.innerHTML = "Invalid last name input"
        lnameError.style.display = 'block';
    }else{
        lname.classList.remove("error");
        lnameError.style.display = 'none';
    }
  
    if (country.value === "") {
        country.classList.add("error");
        countryError.innerHTML = "City cannot be empty"
        countryError.style.display = 'block';
    }else{
        country.classList.remove("error");
        countryError.style.display = 'none';
    }

    if (street.value === "") {
        street.classList.add("error");
        streetError.innerHTML = "Street address cannot be empty"
        streetError.style.display = 'block';

    }else{
        street.classList.remove("error");
        streetError.style.display = 'none';
    }
    if (postcode.value === "" ){
        postcode.classList.add("error");
        postError.innerHTML = "Postcode/ZIP cannot be empty"
        postError.style.display = 'block';
    }else if (/\D/.test(postcode.value)) {
        postcode.classList.add("error");
        postError.innerHTML = "Invalid Postcode/ZIP input"
        postError.style.display = 'block';
    }else{
        postcode.classList.remove("error");
        postError.style.display = 'block';
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

    

    //dừng nếu lỗi
    if (fname.value === "" || /[^a-zA-ZÀ-ỹà-ỹ ]/.test(fname.value) ||lname.value === "" || /[^a-zA-ZÀ-ỹà-ỹ ]/.test(lname.value) || country.value === "" || street.value === ""|| postcode.value === "" || /\D/.test(postcode.value) || phone.value === '' || /\D/.test(phone.value) || !validatePhoneNumber(phone.value) || email.value === "" || !validateEmail(email.value) ) {
        return;
    }
    



    alert("Order Success");
    window.location.href = "../home/home.html";
  });
  








  
