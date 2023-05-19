
// main code starts here-----------------------

// let wishlistData = [];

let wishlistData = JSON.parse(localStorage.getItem("wishlistitem")) || [];
// displayData(wishlistData);
console.log(wishlistData,"hi...");


//catching container
let WishlistProducts = document.getElementById("WishlistItemsTable");
let Price;
const displayData = (data) => {
  WishlistProducts.innerHTML = "";
  data.map((ele, index) => {
    console.log(data);

    let row = document.createElement("div");
    row.setAttribute("id", "row");

    // let col1 = document.createElement("d");

    let img = document.createElement("img");
    img.src = ele.img;
    img.setAttribute("class", "WishlistImage");

    // col1.append(img);

    let col2 = document.createElement("div");
    col2.setAttribute("id", "secondDiv");

    let innDiv = document.createElement("div");
    let Title = document.createElement("p");
    Title.innerText = ele.productdescriptionname;
    Title.setAttribute("id", "WishlistTitle");
    Title.setAttribute("class", "WishlistHover");
    let desc = document.createElement("p");
    desc.innerText = "popularity";
    desc.setAttribute("class", "WishlistHover");
    let itemCode = document.createElement("p");
    let code = Math.floor(Math.random() * (1000000 - 500000 + 1)) + 500000;
    itemCode.innerText = `ITEM 1234`;
    itemCode.style.color = "#666666";
    itemCode.style.fontSize = "1.3vh";

    innDiv.append(Title, desc, itemCode);
    let div = document.createElement("div");
    div.setAttribute("id", "btnForWishList");


    //Added col two elements
    col2.append(innDiv, div);

    let col3 = document.createElement("div");
    col3.setAttribute("id", "thirdDiv");

    Price = document.createElement("p");

    Price.innerText = ele.price;
    console.log(Price);

    col3.append(Price);

    let col4 = document.createElement("div");
    col4.setAttribute("id", "WishlistBtns");
    let addToCartListBtn = document.createElement("button");
    addToCartListBtn.innerText = "Add to Cart";

    addToCartListBtn.addEventListener("click", () => {
      addToCartListBtn.innerText = "ADDING...";
    setTimeout(function() {
      addToCartListBtn.innerText = "ADDED ✔";        
    }, 1000);
      addToCartList(ele);
    });
    let iconHeart = document.createElement("span");
    iconHeart.setAttribute("id", "removeFromWish");
    iconHeart.innerHTML = `<svg
    viewBox="0 0 24 24"
    style="width: 2vw"
    id="wishlistIcon"
  >
  <path d="M22 3.1c2.7 2.2 2.6 7.2.1 9.7-2.2 2.8-7.4 8.1-9.3 9.6-.5.4-1.1.4-1.6 0-1.8-1.5-7-6.8-9.2-9.6-2.6-2.6-2.7-7.6 0-9.7C4.6.5 9.7.7 12 4.2 14.3.8 19.3.5 22 3.1z"></path>
    >
  </svg>`;
    iconHeart.addEventListener("click", () => {
      getDelete(index);
    });
    col4.append(addToCartListBtn, iconHeart);

    row.append(img, col2, col3, col4);

    WishlistProducts.append(row);
  });
};
displayData(wishlistData);
//Delete Func
const getDelete = (index) => {
  wishlistData.splice(index, 1);
  localStorage.setItem("wishlistitem", JSON.stringify(wishlistData));
  displayData(wishlistData);
};
//Adding item to Cartlist
function addToCartList(el) {
  console.log(el);
  let cartData = JSON.parse(localStorage.getItem("cartitem")) || [];
  cartData.push(el);
  localStorage.setItem("cartitem", JSON.stringify(cartData));
}

function home(){
  location.href="index.html"
}