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



        
const show = $(".btn-rev");
const des = $(".btn-des");
show.addEventListener("click",function() {
    if($(".review").classList.contains("hidden")){
        $(".review").classList.add("show");
        $(".des").classList.add("hidden");
        show.classList.add("active");
        $(".review").classList.remove("hidden");
        $(".des").classList.remove("show");
        des.classList.remove("active");
    }
});

des.addEventListener("click",function() {
    if($(".des").classList.contains("hidden")){
        $(".des").classList.remove("hidden");
        $(".review").classList.remove("show");
        show.classList.remove("active");
        $(".des").classList.add("show");
        $(".review").classList.add("hidden");
        des.classList.add("active");
    }
});

const amount = $(".input-qty");
const amountValue = amount.value;

let handleMinus = () => {
    if($(".input-qty").value>1){
        $(".input-qty").value--;
    }
}


let handlePlus = () => {
    $(".input-qty").value++;
}

function zoom(e) {
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = (offsetX / zoomer.offsetWidth) * 100
    y = (offsetY / zoomer.offsetHeight) * 100
    zoomer.style.backgroundPosition = x + "% " + y + "%";
};


$(".loop").addEventListener("click",function() {
    if($(".fullscreen_img").classList.contains("hidden")){
        $(".fullscreen_img").classList.add("show");
    }
});

$(".overlay").addEventListener("click",function() {
    if($(".fullscreen_img").classList.contains("show")){
        $(".fullscreen_img").classList.add("hidden");
        $(".fullscreen_img").classList.remove("show");
    }
});

let img = $$(".small-img img");

function setOpacity(event) {
    img.forEach(function(image) {
      image.style.opacity = 0.5;
      $(".small-img img").classList.remove("opa");
    });

    var selectedImage = event.target;
    selectedImage.style.opacity = 1;

    let x = $(".big-img");
    x.style.backgroundImage = "url('"+selectedImage.src+"')";

    let xv = $(".main-img");
    xv.src = selectedImage.src;
    
    let xvx = $(".img img");
    xvx.src = selectedImage.src;
}
    img.forEach(function(image) {
    image.addEventListener('click', setOpacity);
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