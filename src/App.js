import { Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';

import IntroPage from './pages/IntroPage';
import MainPage from './pages/MainPage';
import BoardPage from './pages/BoardPage'
import Footer from './components/Ui/Footer';

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
          <Route path='/board'>
            <BoardPage />
          </Route>
        </Switch>
        <Footer>Footer</Footer>
      </Layout>
  );
}

export default App;