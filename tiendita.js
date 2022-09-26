const listProducts = async () => {
  const response = await fetch("http://localhost:3000/api/v1/products");

  let tableBody = ``;
  const products = await response.json();
  products.forEach((products, index) => {
    tableBody += `<tr>
      <td>${products.id}</td>
      <td>${products.name}</td>
      <td>${products.price}</td>
      <td>${products.image}</td>
    </tr>`;
  });
  // document.getElementById("tableBody_Products").innerHTML = tableBody

  tableBody_Products.innerHTML = tableBody
}

window.addEventListener("load",  function () {
  listProducts();
})
