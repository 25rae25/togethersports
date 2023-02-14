import { Fragment } from 'react';
import styled from 'styled-components';
import town from '../../img/town.jpg';

const MainBottom = () => {
	return(
		<Fragment>
			<Main>
				<MainImg src={town} alt="매장사진" />
				<Subwrap>
					<SubTitle>TogetherSports</SubTitle>
					<Subcontent>TogetherSports는 언제 어디서나 모든 스포츠를 함께 할 수
						있는 스포츠 커뮤니티입니다. 이제부터 힘들고 귀찮게 카페에 용병등록을
						하지 마시고 저희 TogetherSports에서 등록하고 지금 이 순간 함께
						팀원과 운동을 즐겨 보세요!!
					</Subcontent>
				</Subwrap>
		  	</Main>
		</Fragment>
	);
};

const Main = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
	margin: 130px auto;
`

const MainImg = styled.img`
	width: 41em;
	height: 20em;
`

const Subwrap = styled.div`
	width: 50%;
`

const SubTitle = styled.div`
	text-align: center;
    font-size: 2rem;
	font-weight: bold;
    margin-top: 60px;
`

const Subcontent = styled.div`
	text-align: center;
    margin: 30px 20px 0 20px;
`

export default MainBottom