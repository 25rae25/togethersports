import React, { useState, useEffect, useCallback, Fragment } from 'react';
import styled from 'styled-components';

import AddBoard from '../components/Board/AddBoard';
import BoardList from '../components/Board/BoardList';

const BoardPage = ()=> {
  const [board, setBoards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(board, "============")
  const fetchBoardsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://react-yr-b5fff-default-rtdb.firebaseio.com/boards.json');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log(data);

      const loadedBoards = [];

      for(const key in data) {
        loadedBoards.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setBoards(loadedBoards)
 
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBoardsHandler();
  }, [fetchBoardsHandler]);

  async function addBoardHandler(board) {
    const response = await fetch('https://react-yr-b5fff-default-rtdb.firebaseio.com/boards.json', {
      method: 'POST',
      body: JSON.stringify(board),
      headers: {
        'Content-Type': 'application.json'
      }
    });
    const data = await response.json();
    console.log(data);
  }

  let content = <Config>운동 내용이 없습니다</Config>;

  if (board.length > 0) {
    content = <BoardList board={board} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <Loading>로딩중...</Loading>;
  }
  

  return (
    <Fragment>
      <section>
        <AddBoard onAddBoard={addBoardHandler} />
      </section>
      <section>
        <ButtonClick onClick={fetchBoardsHandler}>운동 보기</ButtonClick>
      </section>
      <section>{content}</section>
    </Fragment>
  );
}

const ButtonClick = styled.button`
    width: 68%;
    padding: 10px;
    margin: 10px auto 30px auto;
    display: block;
    border: none;
    background: #0e91e2;
    color: #fff;
    border-radius: 8px;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
`

const Loading = styled.div`
  text-align: center;
  margin: 20px 0;
`

const Config = styled.div`
  text-align: center;
  margin: 20px 0;
`

export default BoardPage;
