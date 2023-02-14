import { Fragment } from "react";
import styled from "styled-components";
import background from "../../img/background.jpg";

const MainTop = () => {
	return(
		<Fragment>
			<Content>
				<Title>Go Exercise Together</Title>
			</Content>
		</Fragment>
	);
};

const Content = styled.div`
	background-image: url(${background});
	background-size: 100% 52.4em;
	height: 52.4em;
	opacity: 0.7;
`

const Title = styled.div`
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    text-align: center;
    color: black;
    font-size: 4rem;
    font-weight: bold;
    letter-spacing: 3.5px;
`

  
export default MainTop;