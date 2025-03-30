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