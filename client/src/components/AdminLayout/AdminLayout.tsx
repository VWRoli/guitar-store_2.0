import { Route, Switch } from 'react-router-dom';

//Components
import MainDashboard from './MainDashboard/MainDashboard';

const AdminPage = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route exact path="/dashboard" render={() => <MainDashboard />} />
      </Switch>
    </>
  );
};

export default AdminPage;
