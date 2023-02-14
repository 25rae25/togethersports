import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "./MainSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import badminton from "../../img/badminton.jpg";
import soccer from "../../img/soccer.jpg";
import baseball from "../../img/baseball.jpg";
import bascketball from "../../img/bascketball.jpg";
import Card from "../../components/Ui/Card";
import styled from "styled-components";


const MainSlider = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		arrows: true,
	
		responsive: [
			{  
				breakpoint: 960,
				settings: {
					slidesToShow:3 
				} 
			},
			{ 
				breakpoint: 768,
				settings: {	
					slidesToShow:2 
				} 
			}
		]
	  };

	  return(
		<Card>
			<Container>
				<Slider {...settings}>
					<NavLink to="/board">
						<SlideImg src={badminton} alt="배드민턴" />
					</NavLink>
					<NavLink to='/board'>
						<SlideImg src={soccer} alt="축구" />
					</NavLink>
					<NavLink to='/board'>
						<SlideImg src={baseball} alt="야구" />
					</NavLink>
					<NavLink to='/board'>
						<SlideImg src={bascketball} alt="농구" />
					</NavLink>
				</Slider>
			</Container>
		</Card>
	);
};

const Container = styled.div`
	width: 90%;
	height: 500px;
	margin: 5%;
`
  
const SlideImg = styled.img`
	object-fit: cover;
	height: 500px;
	width: 100%;
	box-sizing: border-box;
`



export default MainSlider;