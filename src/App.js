
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Home from "./Pages/HomePage/Home/Home"
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/User/Login/Login'
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NotFound from './Pages/Shared/NotFound/NotFound';
import Register from './Pages/User/Register/Register';
import Checkout from './Pages/Checkout/Checkout';
import RequireAuth from './Pages/RequireAuth/RequireAuth'
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';
import UpdateService from './Pages/UpdateService/UpdateService';
import { ToastContainer } from 'react-toastify';
import Order from './Pages/Order/Order';


function App() {
  return (
    <div className='app text-center'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        
        <Route path='/checkout/:serviceId' element={
            <RequireAuth>
                <Checkout></Checkout>
            </RequireAuth>}></Route>

        <Route path='/addservice' element={
            <RequireAuth>
                <AddService></AddService>
            </RequireAuth>}></Route>

        <Route path='/manage' element={
            <RequireAuth>
              <ManageServices></ManageServices>
            </RequireAuth>}></Route>

        <Route path='/orders' element={
            <RequireAuth>
              <Order></Order>
            </RequireAuth>}></Route>

        <Route path='/update' element={
            <RequireAuth>
              <UpdateService></UpdateService>
            </RequireAuth>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
}

export default App;
