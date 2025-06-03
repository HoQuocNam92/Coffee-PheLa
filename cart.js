

const cartItem = document.querySelector('.cart-item');
const productSelect = document.querySelector('.roduct-select');
const productDetails = document.querySelector('.product-details');
const productInfo = document.querySelector('.product-info');
const productQuantity = document.querySelector('.product-quantity');
const quantityInput = document.querySelector('.quantity-input');
const productTotal = document.querySelector('.product-total');
const productActions = document.querySelector('.product-actions');

const btnAddCart = document.querySelector('.btn_product_info');

const cartLocal = JSON.parse(localStorage.getItem('cart')) || [];


function Cart () {
    cartLocal.forEach((item)=>{
        const input = document.createElement('input');
        const img = document.createElement('img');
        const button = document.createElement('button');
        const p = document.createElement('p');
        const h3 = document.createElement('h3');
        input.classList.add('product-checkbox');
        input.setAttribute('type','checkbox');
        img.src(item.src);
        img.classList.add('product-image');
        h3.textContent = item.name;
        h3.classList.add('product-name');
        p.textContent = item.category
        button.textContent = "Xóa";
        button.classList.add('action-btn');
        productSelect.appendChild(input);
        productInfo.appendChild(h3)
        productInfo.appendChild(p)
        productDetails.appendChild(productInfo);
        cartItem.appendChild()
    })
}

function updateLocal() {
    localStorage.setItem('cart',JSON.stringify(cartLocal));
}

btnAddCart.onclick = () {
    if(cartLocal) {
        
    }
    else {
        let arr = []
        arr.push({
            
        })
    }
}

