import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import TopNav from "./components/TopNav"
import PrivateRoute from "./components/PrivateRoute"
// Components
import Home from "./booking/Home"
import Login from "./auth/Login"
import Register from "./auth/Register"
import Dashboard from "./user/Dashboard"
import DashboardSeller from "./user/DashboardSeller"
import NewHotel from "./hotels/NewHotel"
import StripeCallback from "./stripe/StripeCallback"
import EditHotel from "./hotels/EditHotel"
import ViewHotel from "./hotels/ViewHotel"
import StripeSuccess from "./stripe/StripeSuccess"
import StripeCancel from "./stripe/StripeCancel"
import SearchResult from "./hotels/SearchResult"

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position='top-center' />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<Register />} />

        <Route exact path='/' element={<PrivateRoute />}>
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/dashboard/seller' element={<DashboardSeller />} />
          <Route exact path='/hotels/new' element={<NewHotel />} />
          <Route exact path='/stripe/callback' element={<StripeCallback />} />
          <Route exact path='/hotel/edit/:hotelId' element={<EditHotel />} />
          <Route
            exact
            path='/stripe/success/:hotelId'
            element={<StripeSuccess />}
          />
          <Route exact path='/stripe/cancel' element={<StripeCancel />} />
        </Route>
        <Route exact path='/hotel/:hoteId' element={<ViewHotel />} />
        <Route exact path='/search-result' element={<SearchResult />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
