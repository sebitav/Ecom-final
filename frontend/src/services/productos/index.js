const baseUrl = "/api/productos";

export function getProductos() {
  return fetch(baseUrl).then((res) => res.json());
}

export async function createProduct(producto) {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(producto),
  }).then((res) => res.json());
}
