import { NavLink } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {

  return (
    <header className={classes.header}>
      <NavLink to='/'>
        <div className={classes.logo}>TogetherSports</div>
      </NavLink>
      <nav>
        <ul>
          <li>
			      <NavLink to='/introduce' style={{color:'white'}} activeStyle={{color:'yellow'}}>소개</NavLink>
		      </li>
		      <li>
			      <NavLink to='/health' style={{color:'white'}} activeStyle={{color:'yellow'}}>운동</NavLink>
		      </li>
		      <li>
			      <NavLink to='/login' style={{color:'white'}} activeStyle={{color:'yellow'}}>로그인</NavLink>
		      </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;