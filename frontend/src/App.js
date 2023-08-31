import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home";
import Mock from "./pages/mock";
import CartPage from "./pages/cart";
import NotFound from "./components/NotFound";
import LoginPage from "./pages/loginPage";
import RegisterPage from "./pages/register";
import RegisterSuccess from "./pages/registerSuccess";
import RegisterForm from "./components/registerForm";
import CompraExitosa from "./components/compraExitosa/compraExitosa";
import Header from "./components/header";
import { useUser } from "./context/userContext";
import Loader from "./components/loader";

function App() {
  const [loading, setLoading] = useState(true)
  const { setUser } = useUser()

  useEffect(() => {
    fetch('/api/auth/checkUser')
      .then(res => res.json())
      .then(res => {
        console.log('checkUser', res)
        if (!res.isAuth) {
          setUser(null)
          setLoading(false)
        } else {
          setUser(res.user)
          setLoading(false)
        }
      })
  }, [setUser])

  if (loading) return <Loader />

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mock" element={<Mock />} />
        <Route path="/cart" element={<CartPage />}>
          <Route path="compraExitosa" element={<CompraExitosa />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/register" element={<RegisterPage />}>
          <Route index element={<RegisterForm />} />
          <Route path="success" element={<RegisterSuccess />} />
        </Route>
        <Route path="*" element={<Navigate to='404' replace />} />
        <Route path="404" element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
