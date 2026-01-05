import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import Home from './pages/Home'
import Stocks from './pages/Stocks'
import Crypto from './pages/Crypto'
import Forex from './pages/Forex'
import FDNFD from './pages/FDNFD'
import Register from './pages/Register'
import Download from './pages/Download'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="stocks" element={<Stocks />} />
          <Route path="crypto" element={<Crypto />} />
          <Route path="forex" element={<Forex />} />
          <Route path="fd-nfd" element={<FDNFD />} />
          <Route path="register" element={<Register />} />
          <Route path="download" element={<Download />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

