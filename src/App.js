import { useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Layout from './components/Layout/Layout';

import IntroPage from './pages/IntroPage';
import MainPage from './pages/MainPage';
import BoardPage from './pages/BoardPage'
import Footer from './components/Ui/Footer';
import AuthPage from './pages/AuthPage';
import AuthContext from './store/auth-context';

function App() {
  const authCtx = useContext(AuthContext);

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
          {!authCtx.isLoggedIn && (
            <Route path='/login'>
              <AuthPage />
            </Route>
          )}
          {/* <Route path='/profile'>
            {authCtx.isLoggedIn &&<UserProfile />}
            {!authCtx.isLoggedIn && <Redirect to='/login' />}
          </Route> */}
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
        <Footer>Footer</Footer>
      </Layout>
  );
}

export default App;