import { Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Header';

function App() {
  return (
      <Layout>
      <Switch>
          <Route path='/' exact>
          
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;