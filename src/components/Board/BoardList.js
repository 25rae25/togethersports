import styled from 'styled-components';

import Board from './Board';

const BoardList = (props) => {
  console.log(props.boards)
  return (
    <BoardsList>
      {props.board.map((board) => (
        <Board
          key={board.id}
          title={board.title}
          releaseDate={board.releaseDate}
          openingText={board.openingText}
        />
      ))}
    </BoardsList>
  );
};

const BoardsList = styled.div`
  height: 550px;
  width: 70%;
  overflow-y: scroll;
	margin: 80px auto;
	padding: 0;
`

export default BoardList;
