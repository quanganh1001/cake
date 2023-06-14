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


// slide header3
$(document).ready(function(){
$('.a-product-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
    arrows: false,
    responsive: [
    {
        breakpoint: 800,
        settings: {
        slidesToShow: 3
        }
    },
    {
        breakpoint: 480,
        settings: {
        slidesToShow: 3
        }
    }
    ]
});
});

// section6 popup menu
const chef1 = document.querySelector(".my-popup");
const chefButton = document.querySelector(".chef_1");

chefButton.addEventListener("click", function() {
if (chef1.classList.contains("show")) {
chef1.classList.remove("show");
} else {
chef1.classList.add("show");
}
});
const close = document.querySelector(".icon");

close.addEventListener("click",function() {
if (chef1.classList.contains("show")) {
chef1.classList.remove("show");
}
});

const chef2 = document.querySelector(".my-popup2");
const chefButton2 = document.querySelector(".chef_2");

chefButton2.addEventListener("click", function() {
if (chef2.classList.contains("show")) {
chef2.classList.remove("show");
} else {
chef2.classList.add("show");
}
});
const close2 = document.querySelector(".icon2");

close2.addEventListener("click",function() {
if (chef2.classList.contains("show")) {
chef2.classList.remove("show");
}
});

const chef3 = document.querySelector(".my-popup3");
const chefButton3 = document.querySelector(".chef_3");

chefButton3.addEventListener("click", function() {
if (chef3.classList.contains("show")) {
chef3.classList.remove("show");
} else {
chef3.classList.add("show");
}
});
const close3 = document.querySelector(".icon3");

close3.addEventListener("click",function() {
if (chef3.classList.contains("show")) {
chef3.classList.remove("show");
}
});




// back to top
window.addEventListener('scroll', function() {
    var backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY >= 200) {
      backToTopButton.classList.add('show');
    } else {
      backToTopButton.classList.remove('show');
    }
  });
  
  document.getElementById('back-to-top').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
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