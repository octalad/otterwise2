import "./App.css";
import { Routes, Route } from "react-router-dom";
import PublicPage from "./routes/PublicPage";
import Login from "./routes/Login.js";
import Layout from "./components/layout/Layout.js";
import { AuthProvider } from "./context/auth-context.js";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/protected" element={<PublicPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
