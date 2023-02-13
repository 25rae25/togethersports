import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import IntroPage from './pages/IntroPage';
import MainPage from './pages/MainPage';

function App() {
  return (
      <Layout>
        <Switch>
          <Route path='/' exact>
          <MainPage />
          </Route>
          <Route path='/introduce'>
            <IntroPage />
          </Route>
        </Switch>
      </Layout>
  );
}

export default App;