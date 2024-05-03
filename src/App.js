import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import LoginPage from "./Pages/Login";
import DashboardPage from "./Pages/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBlog from "./Pages/Add Blog";
import BlogList from "./Pages/Blog List";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/admin-panel">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/blog-list" element={<BlogList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
