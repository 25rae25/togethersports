import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../store/auth-context';

import classes from './Header.module.css';

const Header = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  }

  return (
    <header className={classes.header}>
      <NavLink to='/'>
        <div className={classes.logo}>TogetherSports</div>
      </NavLink>
      <nav>
        <ul>
          {!isLoggedIn && (
            <>
              <li>
                <NavLink to='/introduce' style={{color:'white'}} activeStyle={{color:'yellow'}}>소개</NavLink>
              </li>
              <li>
                <NavLink to='/board' style={{color:'white'}} activeStyle={{color:'yellow'}}>운동</NavLink>
              </li>
              <li>
                <NavLink to='/login' style={{color:'white'}} activeStyle={{color:'yellow'}}>로그인</NavLink>
              </li>
             </>
          )}
          {isLoggedIn && (
            <>
              <li>
                <NavLink to='/introduce' style={{color:'white'}} activeStyle={{color:'yellow'}}>소개</NavLink>
              </li>
              <li>
                <NavLink to='/board' style={{color:'white'}} activeStyle={{color:'yellow'}}>운동</NavLink>
              </li>
              <li>
                <button onClick={logoutHandler}>로그아웃</button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;