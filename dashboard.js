 

const item = document.querySelectorAll('.nav-link');
const content = document.querySelectorAll('.dashboard-section');

item.forEach((item, index) => {
   item.onclick = function() {
    content.forEach((content, index) => {
        content.classList.remove('active');
    })
    document.querySelector('.nav-link.active').classList.remove('active');
    item.classList.add('active');
    content[index].classList.add('active');
   } 
})


function openPopup() {

    document.getElementById('popup-overlay').style.display = 'flex';
}

 function closePopups() {
    
    document.querySelector('#popup-overlay').style.display = '';
 
 }

  const productId = document.querySelector('#productId')
  const productName = document.querySelector('#productName')
  
  const category = document.querySelector('#category')
  const price = document.querySelector('#price')
  const quantity = document.querySelector('#quantity')
  const image = document.querySelector('#image')

  
let data = JSON.parse(localStorage.getItem('product')) || [];




 function renderProducts() {
  const tbody = document.querySelector('.data-table tbody');
  tbody.innerHTML = ""; 

  data = JSON.parse(localStorage.getItem('product')) || [];

  data.forEach((product, index) => {
    const tr = document.createElement('tr');
    const tdDelete = document.createElement('td');

    tr.innerHTML = `
      <td><img src="${product.img}" alt="Product Image" class="table-product-image"></td>
      <td>${product.id}</td>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.price}</td>
      <td>${product.quantity}</td>
    `;

    tdDelete.textContent = "Xóa";
    tdDelete.style.cursor = "pointer";
    tdDelete.style.color = "red";
    tdDelete.onclick = function () {
      data.splice(index, 1);  
      updateProduct(data);
      renderProducts();
    };

    tr.appendChild(tdDelete);
    tbody.appendChild(tr);
  });
}
function updateProduct(item) {
        localStorage.setItem('product',JSON.stringify(item))

}
  function addProduct() {
    
    const data = {
        id : productId.value,
        name : productName.value,
        category:category.value,
        price : price.value,
        quantity : quantity.value,
        img : image.value ,
    }
    let dataLocal  =JSON.parse(localStorage.getItem('product')) ;
    if(dataLocal) {
        dataLocal.push(data);
         updateProduct(dataLocal)

    }
    else {
        let arr = [];
        arr.push(data)
         updateProduct(arr)
    }
    
  productId.value = "";
  productName.value = "";
  category.value = "";
  price.value = "";
  quantity.value = "";
  image.value = "";

  }


 renderProducts();
 