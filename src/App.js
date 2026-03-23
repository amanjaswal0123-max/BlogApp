import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";

/* ===== ADMIN ===== */
import AdminLogin from "./admin/Login";
import AddBlog from "./admin/AddBlog";
import EditBlog from "./admin/EditBlog";
import LogOut from "./admin/LogOut";
import SideBar from "./components/SideBar";
import ViewBlog from "./admin/ViewBlog";

/* ===== USER ===== */
import Signup from "./Useradmin/Signup";
import UserLogin from "./Useradmin/UserLogin";
import UserAddBlog from "./Useradmin/UserAddBlog";
import AllBlogs from "./Useradmin/AllBlogs";
import UserLogout from "./Useradmin/UserLogout"


/* ===== PUBLIC ===== */
import Home from "./pages/Home";
import BlogDetail from "./pages/BlogDetail";

/* ===== COMPONENTS ===== */
import NavigationBar from "./components/NavigationBar";
import ProtectedRoute from "./components/ProtectedRoute";
import UserProtectedRoute from "./components/UserProtectedRoute";
import UserSideBar from "./components/UserSideBar";

function App() {
  return (
    <Router>
      <NavigationBar />

      <Routes>
        {/* ================= PUBLIC ================= */}
        <Route path="/" element={<Home />} />
        <Route path="/blogs/:slug" element={<BlogDetail />} />
      

        {/* ================= ADMIN ================= */}
        <Route path="/admin/login" element={<AdminLogin />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<SideBar />}>
            <Route path="addblog" element={<AddBlog />} />
            <Route path="edit-blog/:id" element={<EditBlog />} />
            <Route path="viewblog" element={<ViewBlog />} />
            <Route path="logout" element={<LogOut />} />
          </Route>
        </Route>

        {/* ================= USER ================= */}
        <Route path="/user/signup" element={<Signup/>}/>
        <Route path="/user/login" element={<UserLogin />} />

        <Route element={<UserProtectedRoute />}>
          <Route path="/user" element={<UserSideBar />}>
            <Route path="addblog" element={<UserAddBlog />} />
            <Route path="blogs" element={<AllBlogs />} />
            <Route path="logout" element={<UserLogout />} />
        
          </Route> 
        </Route>
      </Routes>
    </Router>
  );
}

export default App;