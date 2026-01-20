import './App.css'
import CheckoutPage from './pages/checkout/CheckoutPage'
import HomePage from './pages/HomePage'
import { Route, Routes } from 'react-router'
import OrdersPage from './pages/OrdersPage'
import TrackingPage from './pages/TrackingPage'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Routes>
      <Route index element={<HomePage/>} />
      <Route path='checkout' element={<CheckoutPage/>} />
      <Route path='orders' element={<OrdersPage/>} />
      <Route path='tracking' element={<TrackingPage/>} />
      <Route path='*' element={<NotFound/>} />

    </Routes>
  )
}

export default App
