
const fixed = document.getElementById('fixed');
window.onscroll = function () {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    fixed.style.display = "flex";
  } else {
    fixed.style.display = "none";
  }
};
fixed.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ======================================================================
// Reapeat the header and footer in all pages
function loadElement(pageUrl, selector, targetID) {
  fetch(pageUrl)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, 'text/html');
      const element = doc.querySelector(selector);
      if (element) {
        document.getElementById(targetID).innerHTML = element.innerHTML;
      } else {
        console.error(`Element ${selector} not found in ${pageUrl}`);
      }
    })
    .catch(error => console.error(`Error loading ${selector} from ${pageUrl}: `, error));
}
// load the header and the footer in independent files
loadElement('header.html', 'div', 'header-container');
loadElement('footer.html', 'footer', 'footer-container');


// ================================================================

// document.querySelector("#btn-listProfile").onclick = function() {
//   let profileBtn = document.getElementById('listOfProfile');
//   if (profileBtn.style.marginRight === '-250px') {
//     profileBtn.style.marginRight = '0'
//   } else {
//     profileBtn.style.marginRight = '-250px'
//   }
// }

// ================================================================
// view all products1
const allProducts = document.getElementById("btn-all-products");
const container_products = document.getElementById("container-products");
const showAllProduct = document.getElementById("show-product-container");

let isHidden = true;
allProducts.addEventListener("click", function () {
  if (isHidden) {
    allProducts.textContent = "Hide Products";
    container_products.style.display = 'flex'
    showAllProduct.style.display = 'none'
  } else {
    allProducts.textContent = "View All Products"
    container_products.style.display = 'none'
    showAllProduct.style.display = 'flex'
  }
  isHidden = !isHidden;
})
// end


// view all products2
const allBestProducts = document.getElementById("all-best-products");
const containerBestProducts = document.getElementById("best-container-products");
const partOfProducts = document.getElementById("show-best-product-container");

let ishidden = true;
allBestProducts.addEventListener("click", function () {
  if (ishidden) {
    allBestProducts.textContent = "Hide Products"
    containerBestProducts.style.display = 'flex'
    partOfProducts.style.display = 'none'
  } else {
    allBestProducts.textContent = "View All Products"
    containerBestProducts.style.display = 'none'
    partOfProducts.style.display = 'flex'
  }
  ishidden = !ishidden;
})
// end 

//view all products3
const exploreProBtn = document.getElementById("explore-btn-products");
const exploreContainer = document.getElementById("explore-container-products");
const exploreShowPro = document.getElementById("explore-show-product-container")

let isHidden1 = true;
exploreProBtn.addEventListener("click", function () {
  if (isHidden1) {
    exploreProBtn.textContent = "Hide Products"
    exploreContainer.style.display = 'flex'
    exploreShowPro.style.display = 'none'
  } else {
    exploreProBtn.textContent = "View All Products"
    exploreContainer.style.display = 'none'
    exploreShowPro.style.display = 'flex'
  }
  isHidden1 = !isHidden1;
})
// end
// ===========================================================================

function scrollToComputer() {
  const computer = document.getElementById("sectionComputer")
  computer.scrollIntoView({ behavior: "smooth" })
}
function scrollToPhones() {
  const phones = document.getElementById("sectionPhone")
  phones.scrollIntoView({ behavior: "smooth" })
}
function scrollToSmartWatch() {
  const smartWatch = document.getElementById("sectionSmartWat")
  smartWatch.scrollIntoView({ behavior: "smooth" })
}
function scrollToCamera() {
  const camera = document.getElementById("sectionCamera")
  camera.scrollIntoView({ behavior: "smooth" })
}
function scrollToHeadPhone() {
  const headPhone = document.getElementById("sectionHeadPhone")
  headPhone.scrollIntoView({ behavior: "smooth" })
}
function scrollToGaming() {
  const gaming = document.getElementById("sectionGaming")
  gaming.scrollIntoView({ behavior: "smooth" })
}