import { Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
//Components
import Navbar from './Navbar/Navbar';
import Banner from './Banner/Banner';

const PublicLayout = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Banner />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
      </Switch>
    </>
  );
};

export default PublicLayout;
