import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './components/Loading';
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./pages/Home"));
const Error = lazy(() => import("./pages/Error.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Policy = lazy(() => import("./pages/Policy.jsx"));
const Category = lazy(() => import("./pages/Category.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const Register = lazy(() => import("./pages/Register.jsx"));
const Cart = lazy(() => import("./pages/Cart.jsx"));
const Dashboard = lazy(() => import("./pages/user/Dashboard.jsx"));
const ForgotPassword = lazy(() => import("./pages/ForgotPassword.jsx"));
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard.jsx'));
const AdminRoute = lazy(() => import('./components/Routes/AdminRoute.jsx'));
const CreateCategory = lazy(() => import('./pages/admin/CreateCategory.jsx'));
const CreateProduct = lazy(() => import('./pages/admin/CreateProduct.jsx'));
const Users = lazy(() => import('./pages/admin/Users.jsx'));
const Profile = lazy(() => import('./pages/user/Profile.jsx'));
const Orders = lazy(() => import('./pages/user/Orders.jsx'));
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/authState.jsx';
import { PrivateRoute } from './components/Routes/Private.jsx';

const App = () => {
  return (

    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<Loading />}>
          <ToastContainer />
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/policy' element={<Policy />} />
            <Route path='/category' element={<Category />} />
            <Route path='/dashboard' element={<PrivateRoute />}>
              <Route path='user' element={<Dashboard />} />
              <Route path='user/profile' element={<Profile />} />
              <Route path='user/orders' element={<Orders />} />
            </Route>
            <Route path='/dashboard' element={<AdminRoute />}>
              <Route path='admin' element={<AdminDashboard />} />
              <Route path='admin/create-category' element={<CreateCategory />} />
              <Route path='admin/create-product' element={<CreateProduct />} />
              <Route path='admin/users' element={<Users />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/forgot-password' element={<ForgotPassword />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='*' element={<Error />} />
          </Routes>
          <Footer />
        </Suspense>
      </AuthProvider>
    </BrowserRouter>

  )
}

export default App;