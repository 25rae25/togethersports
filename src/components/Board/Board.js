import React from 'react';
import styled from 'styled-components';


const Board = (props) => {
  console.log(props.boards)
  return (
    <BoardWrap>
      <BoardTitle>{props.title}</BoardTitle>
      <BoardDate>{props.releaseDate}</BoardDate>
      <p>{props.openingText}</p>
    </BoardWrap>
  );
};

const BoardWrap = styled.div`
  margin: 1rem;
	padding: 1rem;
  width:100%;
	background-color: #0e91e2;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	border-radius: 12px;
	text-align: center;
	color: white;
`

const BoardTitle = styled.h1`
  font-size: 2rem;
	color: #f7e702;
`

const BoardDate = styled.h3`
  color: #eccf77;
	margin: 0;
	font-size: 1rem;
`



export default Board;
