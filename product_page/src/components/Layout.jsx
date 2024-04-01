import Header from './Header'
import Footer from './Footer'
import VendorList from './vendor'
import FoodList from './Food'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <VendorList />
      <FoodList />
      <Footer />
    </div>
  )
}

export default Layout