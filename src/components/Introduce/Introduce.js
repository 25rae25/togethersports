import { Fragment } from 'react';
import classes from './Introduce.module.css';

const Introduce = () => {
	return(
		<Fragment>
    		<section className={classes.section}>
      		<article className={classes.article}>
        		<div className={classes.logoBack}>
          			<div className={classes.logo}>
						<div>Together</div>
						<div>Sports</div>
          			</div>
        		</div>
        	<div className={classes.textBack}>
				<h1 className={classes.text1}>스포츠의 중심</h1>
				<h1 className={classes.text2}>TogetherSports는 여러분의 운동커뮤니티를</h1>
				<h1 className={classes.text3}>돕고 있습니다.</h1>
        	</div>
      		</article>
    		</section>
	</Fragment>
	);
};

export default Introduce;