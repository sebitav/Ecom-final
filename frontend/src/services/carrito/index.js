const baseUrl = "/api/carrito";
const carritoID = '625c58650227224a5beba017'

export async function getCarritoById() {
  return fetch(`${baseUrl}/${carritoID}/productos`).then((res) => res.json());
}

export async function addProductToCart(producto) {
  return fetch(`${baseUrl}/${carritoID}/productos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto),
  }).then((res) => res.json())
}

export async function removeProductFromCart(productId) {
  return fetch(`${baseUrl}/${carritoID}/productos/${productId}`, {
    method: "DELETE",
  }).then((res) => res.json());
}