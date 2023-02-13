import { Link } from 'react-router-dom';

import classes from './Header.module.css';

const Header = () => {

  return (
    <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>TogetherSports</div>
      </Link>
      <nav>
        <ul>
          <li>
			<Link to=''>소개</Link>
		  </li>
		  <li>
			<Link to=''>운동</Link>
		  </li>
		  <li>
			<Link to=''>로그인</Link>
		  </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;