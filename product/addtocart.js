function sendData(){
    var img = document.getElementById('img_name').getAttribute('src');
    var name = document.getElementById("name-pr").innerText;
    var price =  parseInt(document.getElementById("price-pr").innerText.substring(1));
    var quantity =  document.getElementById("quantity-pr").value;
    
    const sanPham = {
        name: name,
        img: img,
        price: price,
        quantity: quantity
    };

    

    // Lấy danh sách sản phẩm từ session storage (nếu có)
    let danhSachSanPham = JSON.parse(localStorage.getItem("danhSachSanPham")) || [];

    
    const index = danhSachSanPham.findIndex(function (sanPham) {
        return sanPham.name === name;
    });

    function sumquantity(a,b){
        x = parseInt(a);
        y = parseInt(b);
        return x + y;
    }
    if (index > -1) {
        
        // Sản phẩm đã tồn tại, thay thế thông tin số lượng
        danhSachSanPham[index].quantity = sumquantity(danhSachSanPham[index].quantity,quantity);
    }else{
        // Thêm sản phẩm vào danh sách
        danhSachSanPham.push(sanPham);
    }


    // Lưu danh sách sản phẩm vào session storage
    localStorage.setItem("danhSachSanPham", JSON.stringify(danhSachSanPham));
    
    window.location.href = "../checkout/Checkout.html";
    alert("Add to cart completed")



}
