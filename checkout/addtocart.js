var tbody = document.getElementsByTagName("tbody")[0];



const danhSachSanPham = JSON.parse(localStorage.getItem("danhSachSanPham")) || [];


danhSachSanPham.forEach(function (sanPham) {
    var newRow = tbody.insertRow();
    var nameCell = newRow.insertCell(0);
    var priceCell = newRow.insertCell(1);
    var quantityCell = newRow.insertCell(2);
    var totalCell = newRow.insertCell(3);
    var deleteCell = newRow.insertCell(4);   
    
    
    nameCell.innerHTML = ' <img class="img" src="'+ sanPham.img +'" width="20%" alt=""><span> '+ sanPham.name +'</span>';

    priceCell.innerHTML = '<span>$'+sanPham.price+'.00</span>' ;
    quantityCell.innerHTML ='<span>'+sanPham.quantity+' pcs</span>' ;
    function totalprice(a,b){
    return a * b;
    }
    var total = totalprice(sanPham.quantity, sanPham.price)
    totalCell.innerHTML = '<span class="total">$'+total+'.00</span>' 
    deleteCell.innerHTML = '<i id="'+sanPham.name+'" class="fa-solid fa-x"></i>';
    deleteCell.style=" width: 2%"
    // nameCell.style = "display:flex;width:100%; text-align:left; justify-content:stat; align-items:center;"
    nameCell.style = "border-bottom: 1px dotted black;display:flex;width:100%; text-align:left; justify-content:stat; align-items:center; "
    priceCell.style = "border-bottom: 1px dotted black;"
    quantityCell.style = "border-bottom: 1px dotted black;"
    totalCell.style = "border-bottom: 1px dotted black;"
    deleteCell.style = "border-bottom: 1px dotted black;"
    
    
    var deleteBtn = document.getElementById(sanPham.name)
    

      deleteBtn.addEventListener('click', () =>{
        console.log(sanPham.name)
      xoaDoiTuong(sanPham.name);
      });
    })
    




function xoaDoiTuong(ten) {
const index = danhSachSanPham.findIndex(function (sanPham) {

  return sanPham.name === ten;
  
});
console.log(index);
if (index > -1) {
  danhSachSanPham.splice(index, 1);

  localStorage.setItem("danhSachSanPham", JSON.stringify(danhSachSanPham));
  location.reload();

}

}


// localStorage.removeItem("danhSachSanPham");


function tinhTongTien() {
    let tongTien = 0;
    for (let i = 0; i < danhSachSanPham.length; i++) {
      const sanPham = danhSachSanPham[i];
      tongTien += sanPham.price * sanPham.quantity;
    }
    return tongTien;
  }

//total price

var totalAll = document.querySelector('#totalAll');

totalAll.innerHTML = '$' +tinhTongTien() +'.00'


// ẩn cart khi rỗng
if (tbody.rows.length === 0) {
    // Ẩn phần tử bằng cách thay đổi thuộc tính CSS
    document.querySelector('.section2').style.display = "none";
  } else {
    // Hiển thị phần tử nếu danhSachSanPham không rỗng
    document.querySelector('.section2').style.display = "block";
  }



// cart number

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











