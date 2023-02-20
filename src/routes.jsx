import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/Home"

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/"/>
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas;