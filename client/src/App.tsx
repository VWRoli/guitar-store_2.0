import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//CSS
import './css/main.min.css';

//Layouts
import PublicLayout from './components/PublicLayout/PublicLayout';
import AdminLayout from './components/AdminLayout/AdminLayout';

function App(): JSX.Element {
  return (
    <Router>
      <main className="App">
        <Switch>
          <Route path="/dashboard" component={AdminLayout} />
          <Route path="/" component={PublicLayout} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
