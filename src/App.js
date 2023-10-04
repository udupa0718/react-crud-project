import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Header from './component/Header'
import Login from "./component/Auth/Login"
import Home from './component/default/Home'
import Register from './component/Auth/Register'
import Pnf from './component/default/Pnf'


function App(props) {
  return (
    <BrowserRouter>
        <Header/>

        <Routes>
           <Route path={`/`} element={<Home/>} />
           <Route path={`/login`} element={<Login/>} />
           <Route path={`/register`} element={<Register/>} />
           <Route path={`/*`} element={<Pnf/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
