import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
//Components
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';
import Footer from './Footer/Footer';

const PublicLayout = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Banner />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
      </Switch>
      <Footer />
    </>
  );
};

export default PublicLayout;
