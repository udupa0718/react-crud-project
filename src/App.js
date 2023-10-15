import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './component/Header'
import Login from "./component/Auth/Login"
import Home from './component/default/Home'
import Register from './component/Auth/Register'
import Pnf from './component/default/Pnf'
import ProtectedRoute from './PrivateRoute/ProtectedRoute'
import { ToastContainer } from "react-toastify"
import Create from './component/default/Create'
import Update from './component/default/Update'

function App(props) {
  return (
    <BrowserRouter>
        <Header/>
        <ToastContainer/>
        <Routes>
              <Route element={<ProtectedRoute/>} >
                  <Route path={`/`} element={<Home/>} />
                  <Route path={`/create`} element={<Create/>} />
                  <Route path={`/update/:bookId`} element={<Update/>} />
              </Route>
           <Route path={`/login`} element={<Login/>} />
           <Route path={`/register`} element={<Register/>} />
           <Route path={`/*`} element={<Pnf/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
