import { Routes, Route, Navigate } from "react-router-dom";
import { useContext } from "react";

import Navbar from "./componentes/Navbar";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/login";
import Cart from "./pages/Cart";
import Pizza from "./pages/Pizzas";
import Profile from "./pages/profile";
import NotFound from "./pages/notfound";

import { CartProvider } from "./context/CartContext";
import { UserContext } from "./context/UserContext";

// Protege la ruta Profile
function ProtectedRoute({ children }) {
  const { token } = useContext(UserContext);

  return token ? children : <Navigate to="/login" replace />;
}

// Evita que un usuario con sesión iniciada entre a Login o Register
function PublicRoute({ children }) {
  const { token } = useContext(UserContext);

  return token ? <Navigate to="/" replace /> : children;
}

function App() {
  return (
    <CartProvider>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route path="/cart" element={<Cart />} />

        <Route path="/pizza/:id" element={<Pizza />} />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
