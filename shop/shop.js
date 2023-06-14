// header
let navbar = document.querySelector('.a-navbar');
document.querySelector('#menu-btn').onclick = () => {
navbar.classList.toggle('active');
}
window.onscroll = () => {
navbar.classList.remove('active');
}
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

// user
document.querySelector('#user').addEventListener('click',function(){
    document.querySelector('.user').classList.toggle('hiden')
})

// item
var listItem=[];
listItem.push({
    scrImg:"../image/birthday1.jpeg",
    type: 'birthday',
    name:"Birthday 1",
    note:"Toppings: Chocolate Case",
    money:"$4.00",
    button:"Detail",
    loopImg:"../image/search.svg",
    product:"../product/birthday1.html"
});
listItem.push({
    scrImg:"../image/anniversary1.jpeg",
    type: 'anniversary',
    name:"Anniversary 1",
    note:"Toppings: Cream, Chocolate, Cherry & Chocolate Flakes Garnish",
    money:"$6.00",
    button:"Detail",
    loopImg:"../image/search.svg",
    product:"../product/anniversary1.html"
});
listItem.push({
    scrImg:"../image/engagement1.jpeg",
    type: 'engagement',
    name:"Engagement 1",
    note:"Toppings: Almond Crush, Chocolate Garnish",
    money:"$1.00",
    button:"Detail",
    loopImg:"../image/search.svg",
    product:"../product/engagement1.html"
});
listItem.push({
    scrImg:"../image/marriage1.jpeg",
    type: 'marriage',
    name:"Marriage 1",
    note:"Toppings: Cream, Chocolate, Pineapple, Almonds, Silver Pearls & Cherry Garnish",
    money:"$3.00",
    button:"Detail",
    loopImg:"../image/search.svg",
    product:"../product/marriage1.html"
});
listItem.push({
    scrImg:"../image/birthday2.jpeg",
    type: 'birthday',
    name:"Birthday 2",
    note:"Toppings: Butterscotch, Red Cherry & Chocolate Flakes",
    money:"$8.00",
    button:"Detail",
    loopImg:"../image/search.svg",
    product:"../product/birthday2.html"
});
listItem.push({
    scrImg:"../image/anniversary2.jpg",
    type: 'anniversary',
    name:"Anniversary 2",
    note:"Toppings: Chocolate with Belgium Crush Garnish",
    money:"$5.00",
    button:"Detail",
    loopImg:"../image/search.svg",
    product:"../product/anniversary2.html"
});
listItem.push({
    scrImg:"../image/marriage2.jpeg",
    type: 'marriage',
    name:"Marriage 2",
    note:"Toppings: Cream, White Fondant Flower, & Gold Edible Pearls",
    money:"$10.00",
    button:"Detail",
    loopImg:"../image/search.svg",
    product:"../product/marriage2.html"
});
listItem.push({
    scrImg:"../image/engagement2.jpeg",
    type: 'engagement',
    name:"Engagement 2",
    note:"Filling in Layers: Fruits Crush",
    money:"$9.00",
    button:"Detail",
    idloop: 'loop8',
    loopImg:"../image/search.svg",
    product:"../product/engagement2.html"
});


function inSP(type){
var dsitem = "";
type.forEach(function(item) {
    dsitem += '<li class="a-item" type="' +item.type+ '"><img src="' +item.scrImg+ '" width="100%" alt="a"><h3 class="name-product">' +item.name+ '</h3><span>' +item.note+ '</span><h4>' +item.money+ '</h4><div><a href="'+item.product+'"><button id="btn-order">' +item.button+ '</button></a></div><div class="loop" ><img onclick="getProductImage(this)" src="' +item.loopImg+ '"></div></li>';
})
document.getElementById("a-products").innerHTML=dsitem;
}

inSP(listItem)

 // sort
 var sort = document.getElementById("sort");
 sort.addEventListener('change', () => {
     if (sort.value === 'name-az'){
     listItem.sort(function(a, b) {
         var nameA = a.name.toLowerCase();
         var nameB = b.name.toLowerCase();
         if (nameA < nameB) {
           return -1;
         }
         if (nameA > nameB) {
           return 1;
         }
         return 0;
       });
     //   console.log(listItem)
       dsitem = '';
       inSP(listItem)
     // zoom img
     getProductImage(zoomButton)
     }
     else if (sort.value === 'name-za'){
         listItem.sort(function(a, b) {
             var nameA = a.name.toLowerCase();
             var nameB = b.name.toLowerCase();
             if (nameA > nameB) {
               return -1;
             }
             if (nameA < nameB) {
               return 1;
             }
             return 0;
           });
         //   console.log(listItem)
           dsitem = '';
           inSP(listItem)
            // zoom img
            getProductImage(zoomButton)
         }
 
     else if (sort.value === 'price-l'){
         listItem.sort(function(a, b) {
            return parseInt(a.money.slice(1)) - parseInt(b.money.slice(1));
            });
             // console.log(listItem)
    dsitem = '';
    inSP(listItem)
    // zoom img
    getProductImage(zoomButton)
    }
     else if (sort.value === 'price-h'){
        listItem.sort(function(a, b) {
            return parseInt(b.money.slice(1)) - parseInt(a.money.slice(1));
            });
            
        inSP(listItem)
        // zoom img
        getProductImage(zoomButton)
         }
         // console.log(dsitem)
 })



//category
var filteredArrbirthday = listItem.filter(item =>  item.type === 'birthday')
var filteredArranniversary = listItem.filter(item =>  item.type === 'anniversary')
var filteredArrengagement = listItem.filter(item =>  item.type === 'engagement')
var filteredArrmarriage = listItem.filter(item =>  item.type === 'marriage')
var newImg = document.createElement('img');

document.getElementById('all').addEventListener('click', e =>{
    // rename
    document.querySelector('.a-btn-filter').innerHTML = "Filter"
    // sort name
    var sort = document.getElementById("sort");
    sort.addEventListener('change', () => {
        if (sort.value === 'name-az'){
            listItem.sort(function(a, b) {
                var nameA = a.name.toLowerCase();
                var nameB = b.name.toLowerCase();
                if (nameA < nameB) {
                return -1;
                }
                if (nameA > nameB) {
                return 1;
                }
                return 0;
            });
            dsitem = '';
            inSP(listItem)

            // zoom img
            getProductImage(zoomButton)
        }
       else if (sort.value === 'name-za'){
        listItem.sort(function(a, b) {
               var nameA = a.name.toLowerCase();
               var nameB = b.name.toLowerCase();
               if (nameA > nameB) {
               return -1;
               }
               if (nameA < nameB) {
               return 1;
               }
               return 0;
           });
        dsitem = '';
        inSP(listItem)
            // zoom img
        getProductImage(zoomButton)
    }
    // money
    else if (sort.value === 'price-l'){
        listItem.sort(function(a, b) {
            return parseInt(a.money.slice(1)) - parseInt(b.money.slice(1));
            });
            // console.log(listItem)
            dsitem = '';
            inSP(listItem)

            // zoom img
            getProductImage(zoomButton)
    }
    else if (sort.value === 'price-h'){
        listItem.sort(function(a, b) {
            return parseInt(b.money.slice(1)) - parseInt(a.money.slice(1));
            });
            // console.log(listItem)
            dsitem = '';
            inSP(listItem)

            // zoom img
            getProductImage(zoomButton)
    }
    });    
    // listItem
    dsitem = '';
    inSP(listItem)

    // zoom img
    getProductImage(zoomButton)
})

document.getElementById('birthday').addEventListener('click', e =>{
    // rename
    document.querySelector('.a-btn-filter').innerHTML = "Birthday"
    // sort name
    var sort = document.getElementById("sort");
    sort.addEventListener('change', () => {
        if (sort.value === 'name-az'){
            filteredArrbirthday.sort(function(a, b) {
                var nameA = a.name.toLowerCase();
                var nameB = b.name.toLowerCase();
                if (nameA < nameB) {
                return -1;
                }
                if (nameA > nameB) {
                return 1;
                }
                return 0;
            });
            dsitem = '';
            inSP(filteredArrbirthday)
            // zoom img
            getProductImage(zoomButton)
        }
        else if (sort.value === 'name-za'){
            filteredArrbirthday.sort(function(a, b) {
                var nameA = a.name.toLowerCase();
                var nameB = b.name.toLowerCase();
                if (nameA > nameB) {
                return -1;
                }
                if (nameA < nameB) {
                return 1;
                }
                return 0;
            });
            dsitem = '';
            inSP(filteredArrbirthday)

            // zoom img
            getProductImage(zoomButton)
        }
        // money
        else if (sort.value === 'price-l'){
            filteredArrbirthday.sort(function(a, b) {
                return parseInt(a.money.slice(1)) - parseInt(b.money.slice(1));
            });
            dsitem = '';
            inSP(filteredArrbirthday)
            // zoom img
            getProductImage(zoomButton)
        }
        else if (sort.value === 'price-h'){
            filteredArrbirthday.sort(function(a, b) {
                return parseInt(b.money.slice(1)) - parseInt(a.money.slice(1));
                });
            dsitem = '';
            inSP(filteredArrbirthday)
            // zoom img
            getProductImage(zoomButton)
        }
    });
    // birthday
    dsitem = '';
    inSP(filteredArrbirthday)
            // zoom img
            getProductImage(zoomButton)
})

document.getElementById('anniversary').addEventListener('click', e =>{
    // rename
    document.querySelector('.a-btn-filter').innerHTML = "Anniversary"
    // sort name
    var sort = document.getElementById("sort");
    sort.addEventListener('change', () => {
        if (sort.value === 'name-az'){
            filteredArranniversary.sort(function(a, b) {
                var nameA = a.name.toLowerCase();
                var nameB = b.name.toLowerCase();
                if (nameA < nameB) {
                return -1;
                }
                if (nameA > nameB) {
                return 1;
                }
                return 0;
            });
            dsitem = '';
            inSP(filteredArranniversary)
            // zoom img
            getProductImage(zoomButton)
        }
        else if (sort.value === 'name-za'){
            filteredArranniversary.sort(function(a, b) {
                var nameA = a.name.toLowerCase();
                var nameB = b.name.toLowerCase();
                if (nameA > nameB) {
                return -1;
                }
                if (nameA < nameB) {
                return 1;
                }
                return 0;
            });
            dsitem = '';
            inSP(filteredArranniversary)

            // zoom img
            getProductImage(zoomButton)
        }
        // money
        else if (sort.value === 'price-l'){
            filteredArranniversary.sort(function(a, b) {
                return parseInt(a.money.slice(1)) - parseInt(b.money.slice(1));
                });
                // console.log(listItem)
                dsitem = '';
                inSP(filteredArranniversary)

            // zoom img
            getProductImage(zoomButton)
        }
        else if (sort.value === 'price-h'){
            filteredArranniversary.sort(function(a, b) {
                return parseInt(b.money.slice(1)) - parseInt(a.money.slice(1));
            });
            // console.log(listItem)
            dsitem = '';
            inSP(filteredArranniversary)

            // zoom img
            getProductImage(zoomButton)
        }
    });
    // anniversary
    dsitem = '';
    inSP(filteredArranniversary)

            // zoom img
            getProductImage(zoomButton)

})

document.getElementById('engagement').addEventListener('click', e =>{
    // rename
    document.querySelector('.a-btn-filter').innerHTML = "Engagement"
    // sort name
    var sort = document.getElementById("sort");
    sort.addEventListener('change', () => {
        if (sort.value === 'name-az'){
           filteredArrengagement.sort(function(a, b) {
            var nameA = a.name.toLowerCase();
            var nameB = b.name.toLowerCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
            });
            dsitem = '';
            inSP(filteredArrengagement)
            // zoom img
            getProductImage(zoomButton)
        }
        else if (sort.value === 'name-za'){
        filteredArrengagement.sort(function(a, b) {
                var nameA = a.name.toLowerCase();
                var nameB = b.name.toLowerCase();
                if (nameA > nameB) {
                return -1;
                }
                if (nameA < nameB) {
                return 1;
                }
                return 0;
            });
            dsitem = '';
            inSP(filteredArrengagement)
            // zoom img
            getProductImage(zoomButton)
        }
        // money
        else if (sort.value === 'price-l'){
            filteredArrengagement.sort(function(a, b) {
                return parseInt(a.money.slice(1)) - parseInt(b.money.slice(1));
            });
            // console.log(listItem)
            dsitem = '';
            inSP(filteredArrengagement)
            // zoom img
            getProductImage(zoomButton)
        }
        else if (sort.value === 'price-h'){
            filteredArrengagement.sort(function(a, b) {
                return parseInt(b.money.slice(1)) - parseInt(a.money.slice(1));
            });
            // console.log(listItem)
            dsitem = '';
            inSP(filteredArrengagement)
            // zoom img
            getProductImage(zoomButton)
        }
    });
    // engagement
    dsitem = '';
    inSP(filteredArrengagement)
            // zoom img
            getProductImage(zoomButton)
})

document.getElementById('marriage').addEventListener('click', e =>{
     // rename
     document.querySelector('.a-btn-filter').innerHTML = "Marriage"
    // sort name
    var sort = document.getElementById("sort");
    sort.addEventListener('change', () => {
        if (sort.value === 'name-az'){
           filteredArrmarriage.sort(function(a, b) {
            var nameA = a.name.toLowerCase();
            var nameB = b.name.toLowerCase();
            if (nameA < nameB) {
              return -1;
            }
            if (nameA > nameB) {
              return 1;
            }
            return 0;
            });
            dsitem = '';
            inSP(filteredArrmarriage)
            // zoom img
            getProductImage(zoomButton)
        }
        else if (sort.value === 'name-za'){
            filteredArrmarriage.sort(function(a, b) {
                var nameA = a.name.toLowerCase();
                var nameB = b.name.toLowerCase();
                if (nameA > nameB) {
                return -1;
                }
                if (nameA < nameB) {
                return 1;
                }
                return 0;
            });
            dsitem = '';
            inSP(filteredArrmarriage)
            // zoom img
            getProductImage(zoomButton)
        }
    // money
        else if (sort.value === 'price-l'){
            filteredArrmarriage.sort(function(a, b) {
                return parseInt(a.money.slice(1)) - parseInt(b.money.slice(1));
                });
                // console.log(listItem)
                dsitem = '';
                inSP(filteredArrmarriage)

            // zoom img
            getProductImage(zoomButton)
        }
        else if (sort.value === 'price-h'){
            filteredArrmarriage.sort(function(a, b) {
                return parseInt(b.money.slice(1)) - parseInt(a.money.slice(1));
                });
                // console.log(listItem)
                dsitem = '';
                inSP(filteredArrmarriage)

            // zoom img
            getProductImage(zoomButton)
        }
    });
    // marriage
    dsitem = '';
    inSP(filteredArrmarriage)
            // zoom img
            getProductImage(zoomButton)
})


// click btn filter
var filterbtn = document.querySelector('.a-categories');
document.querySelector('.a-btn-filter').onclick = () => {
    filterbtn.classList.toggle('filter');
}
document.querySelector('.a-categories').onclick = () => {
    filterbtn.classList.toggle('filter');
}
window.onscroll = () => {
    filterbtn.classList.remove('filter');
}



// zoom img
function getProductImage(zoomButton) {
    var productDivv = zoomButton.parentElement;
    var productDiv = productDivv.parentElement
    var productImage = productDiv.getElementsByTagName('img')[0];
    var imageSrc = productImage.getAttribute('src');
    var newImg = document.createElement('img');
    document.querySelector('.img').appendChild(newImg)
    newImg.src = imageSrc
    document.querySelector(".zoomimg").style.display = 'block';
}

// click out
document.querySelector('.overlay').addEventListener('click', function() {
    document.querySelector(".zoomimg").style.display = 'none';
});












