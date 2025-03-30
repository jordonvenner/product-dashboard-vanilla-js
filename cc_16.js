//task 2
function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
      .then((response) => response.json())
      .then((data) => {
        data.forEach((product) => {
          console.log(product.fields.name);
        });
      })
      .catch((error) => console.log(error));
  }

  //task 3
  async function fetchProductsAsync() {
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products');
      const products = await response.json();
      displayProducts(products);
    } catch (error) {
      handleError(error);
    }
  }


  //task 4

  function displayProducts(products) {
    const container = document.querySelector('#product-container');
    
    products.slice(0, 5).forEach((product) => {
      const productElement = document.createElement('div');
      productElement.innerHTML = `
        <h3>${product.fields.name}</h3>
        <p>${product.fields.price}</p>
        <img src="${product.fields.image[0].url}" alt="${product.fields.name}">
      `;
      container.appendChild(productElement);
    });
  }