import { createContext, useState } from "react";

export const productContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState(0);

  return (
    <productContext.Provider
      value={{ productos, setProductos, carrito, setCarrito }}
    >
      {children}
    </productContext.Provider>
  );
};
