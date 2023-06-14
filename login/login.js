
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


// validate form
var form = document.getElementById("myform");
// var submit = document.getElementById("register");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    var us = document.getElementById("us");
    var pass = document.getElementById("pass");
    
	var usError = document.querySelector('#usError');
	var passError = document.querySelector('#passError');



    if (us.value === ""){
		us.classList.add("error");
		usError.textContent="User Name cannot be empty"
		usError.style.display="block"
		
    }else{
		us.classList.remove("error");
		usError.style.display="none"
		
	}

	if (pass.value === ""){
		pass.classList.add("error");
		passError.textContent="User Name cannot be empty"
		passError.style.display="block"
		
    }else{
		pass.classList.remove("error");
		passError.style.display="none"
	}


	if (us.value === "" || pass.value === "") {
        return;
    }

	
    alert("Login Success");
    window.location.href = "../home/home.html";	
  });


//   forget
var forget = document.getElementById("forgot");
var bg = document.getElementById("bg");
var inputcoupon = document.getElementById("inputcoupon");
var overlay = document.getElementById("overlay");
var idfs = document.getElementById("inputcoupon");

forget.addEventListener("click", function() {
	bg.style.display="block";
	document.querySelector(".success").classList.add("hidden")
	idfs.classList.remove("error");
});

overlay.addEventListener("click", function() {
	bg.style.display="none";
});

var forgetform = document.getElementById("couponform");
// var submit = document.getElementById("register");
forgetform.addEventListener("submit", function(event) {
	event.preventDefault();

    
      
    if (idfs.value === "") {
        idfs.classList.add("error");
		return;
    }else{
        idfs.classList.remove("error");
		document.querySelector(".success").classList.remove("hidden")
		console.log('d')
    }
  
})

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