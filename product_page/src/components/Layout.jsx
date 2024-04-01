import Header from './Header'
import Footer from './Footer'
import VendorList from './vendor'
import FoodList from './Food'
import ClothList from './Clothes'
import FootwearList from './Footwear'
import SkincareList from './Skincare'
import GadgetList from './Gadgets'
import BookList from './Books'
import BagList from './Bags.'
import HairList from './Hair'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <VendorList />
      <FoodList />
      <ClothList />
      <FootwearList />
      <SkincareList />
      <GadgetList />
      <BookList />
      <BagList />
      <HairList />
      <Footer />
    </div>
  )
}

export default Layout