var products = [
  {
    name: "White Chair",
    headline: "Soft like cloud",
    price: "15000",
    Image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhaXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Blue Chair",
    headline: "Wooden Stool",
    price: "10000",
    Image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    name: "Traditional Chair",
    headline: "Antique",
    price: "16500",
    Image:
      "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoYWlyfGVufDB8fDB8fHww",
  },
];
var popular = [
  {
    name: "Red Chair",
    headline: "Eyes Lounge",
    price: "19000",
    Image:
      "https://images.unsplash.com/photo-1617582907226-c49e2d8200d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    name: "Blue Chair",
    headline: "Wooden Stool",
    price: "10000",
    Image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNoYWlyfGVufDB8fDB8fHww",
  },
  {
    name: "Elegance Chair",
    headline: "Simplicity",
    price: "11500",
    Image:
      "https://images.unsplash.com/photo-1622147681210-d7da05b4a7d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNoYWlyfGVufDB8fDB8fHww",
  },
];
function addProduct() {
  var clutter = "";
  products.forEach(function (product, index) {
    clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
    <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
    <img class="w-full h-full object-cover" src="${product.Image}">
    </div>
    <div class="data w-full px-2 py-5">
      <h1 class="font-semibold text-xl leading-none tracking-tight">
        ${product.name}
      </h1>
      <div class="flex justify-between w-full items-center mt-2">
        <div class="w-1/2">
          <h3 class="font-semibold opacity-20">
          
          ${product.headline}</h3>
          <h4 class="font-semibold mt-2"> &#8377; ${product.price}</h4>
        </div>
        <button data-index= "${index}" class="add w-10 h-10 rounded-full shader text-yellow-400">
          <i data-index= "${index}" class="add ri-add-line"></i>
        </button>
      </div>
    </div>
  </div>`;
  });
  document.querySelector(".products").innerHTML = clutter;
}

function addPopularProducts() {
  var clutter = "";
  popular.forEach(function (product) {
    clutter += `<div
    class="popular bg-white w-fit p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0"
  >
    <div
      class="w-20 h-20 flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden"
    >
      <img
        class="w-full h-full object-cover"
        src="${product.Image}"
        alt=""
      />
    </div>
    <div class="data py-2 w-full">
      <h1 class="leading-none font-semibold">${product.name}</h1>
      <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">
        ${product.headline}
      </h4>
      <h4 class="mt-3 font-semibold text-zinc-500">&#8377; ${product.price}</h4>
    </div>
  </div>`;
  });
  document.querySelector(".populars").innerHTML = clutter;
}
var cart = [];
function addToCart() {
  document
    .querySelector(".products")
    .addEventListener("click", function (details) {
      if (details.target.classList.contains("add")) {
        cart.push(products[details.target.dataset.index]);
      }
    });
}
var flag = 0;
function showCart() {
  document.querySelector(".carticon").addEventListener("click", function () {
    // alert("outerrrrr");
    if (flag == 0) {
      document.querySelector(".cartexpnd").style.display = "block";
      flag = 1;
    } else {
      document.querySelector(".cartexpnd").style.display = "none";
      flag = 0;
    }
    // if (document.querySelector(".cartexpnd").style.display === "hidden") {
    //   document.querySelector(".cartexpnd").style.display = "block";
    // } else {
    //   document.querySelector(".cartexpnd").style.display = "hidden";
    // }
    // document.querySelector(".cartexpnd").classList.toggle("show");
    // if (document.querySelector(".cartexpnd").classList.contains("hidden")) {
    //   // alert("hello");
    //   document.querySelector(".cartexpnd").style.display = "block";
    // } else if (
    //   document.querySelector(".cartexpnd").classList.contains("block")
    // ) {
    //   alert("err");
    //   document.querySelector(".cartexpnd").style.display = "none";
    // }

    var clutter = "";
    cart.forEach(function (prod, index) {
      clutter += ` <div class="flex gap-2 bg-white p-2  rounded-lg">
      <div class="w-10 h-10 flex-shrink-0 rounded-lg overflow-hidden">
      <img class="w-full h-full object-cover " src="${prod.Image}" />
      </div>
      <div>
        <h3 class="font-semibold">${prod.name}</h3>
        <h5 class="text-sm font-semibold opacity-80">&#8377; ${prod.price}</h5>
      </div>  
    </div> `;
    });
    document.querySelector(".cartexpnd").innerHTML = clutter;
  });
}
showCart();
addToCart();
addProduct();
addPopularProducts();
