// const productTypeSelectElement = document.getElementById('type-select')
// const productNameElement = document.getElementById('product-name')
// const productCountElement = document.getElementById('product-count')

// const addBtn = document.querySelector(".add-product")
// const clearBtn = document.querySelector(".clear-list")

// console.log(productTypeSelectElement)
// console.dir(productNameElement)
// console.dir(productCountElement)

// addButton.addEventListener('click', addProducts)

// function addProducts(){
//       const productTypeValue= productType.value
//       const productCountValue = productCount.value
//       const productNameValue= productName.value

//       const productItem= `
//       <div class="product-item">
//             Тип продукта ${productTypeValue} Название:${productNameValue} Количество:${productCountValue}
//       </div>`

//       const products =''
//       arrayProducts.push(productItem)

//       arrayProducts.forEach((c)=>{
//       products=products+c
// })
//       productList.innerHTML = products
// }

document.addEventListener("DOMContentLoaded", () => {
  const productTypeSelect = document.getElementById("type-select");
  const productNameInput = document.getElementById("product-name");
  const productCountInput = document.getElementById("product-count");
  const addButton = document.querySelector(".add-product");
  const clearButton = document.querySelector(".clear-list");
  const productList = document.querySelector(".products-list");

  function addProduct() {
    const productType = productTypeSelect.value;
    const productName = productNameInput.value.trim();
    const productCount = productCountInput.value;

    if (productType === "" || productName === "" || productCount === "") {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    const productItem = document.createElement("div");
    productItem.classList.add("product-item");

    productItem.innerHTML = `
      <div class="description-wrapper">
      <p><strong>Тип:</strong> ${productType}</p>
      <p><strong>Название:</strong> ${productName}</p>
      <p><strong>Количество:</strong> ${productCount}</p>
      </div>
      <button class="remove-button">Удалить</button>
`;

    productItem
      .querySelector(".remove-button")
      .addEventListener("click", () => {
        productItem.remove();
      });

    productList.appendChild(productItem);

    // Очищаем поле ввода после продукта
    productTypeSelect.value = "";
    productNameInput.value = "";
    productCountInput.value = "";
  }

  // Функциия очистки списка продуктов
  function clearProducts() {
    productList.innerHTML = "";
  }

  addButton.addEventListener("click", addProduct);
  clearButton.addEventListener("click", clearProducts);
});
