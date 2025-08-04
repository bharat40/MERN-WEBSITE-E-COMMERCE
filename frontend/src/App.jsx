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
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/authState.jsx';
import { PrivateRoute } from './components/Routes/Private.jsx';
import AdminDashboard from './pages/admin/AdminDashboard.jsx';
import AdminRoute from './components/Routes/AdminRoute.jsx';

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
            </Route>
            <Route path='/dashboard' element={<AdminRoute />}>
              <Route path='admin' element={<AdminDashboard />} />
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