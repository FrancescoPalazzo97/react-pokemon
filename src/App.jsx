import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Gen1st from "./pages/Gen1st"
import Gen2nd from "./pages/Gen2nd"
import Gen3rd from "./pages/Gen3rd"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Layout}>
          <Route path="/" element={<Home />} />
          <Route path="/gen1st" element={<Gen1st />} />
          <Route path="/gen2nd" element={<Gen2nd />} />
          <Route path="/gen3rd" element={<Gen3rd />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
