import { Route, Switch } from 'react-router-dom';
//Components
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';
//Pages
import Home from './Home/Home';
import About from './About/About';
import Products from './Products/Products';
import OnSale from './OnSale/OnSale';
import Cart from './Cart/Cart';
import Compare from './Compare/Compare';
import NotFound from './NotFound/NotFound';

const PublicLayout = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Banner />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/about" render={() => <About />} />
        <Route path="/products" render={() => <Products />} />
        {/* //todo <Route path="/product/:id" render={() => <SingleProduct />} /> */}
        <Route path="/onsale" render={() => <OnSale />} />
        <Route path="/compare" render={() => <Compare />} />
        <Route path="/cart" render={() => <Cart />} />
        <Route path="*" component={NotFound} />
      </Switch>
      <Footer />
    </>
  );
};

export default PublicLayout;
