import React, { useState, useEffect, useCallback } from 'react';

import AddBoard from '../components/Board/AddBoard';
import BoardList from '../components/Board/BoardList';

const BoardPage = ()=> {
  const [boards, setBoards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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

  let content = <p>Found no board.</p>;

  if (boards.length > 0) {
    content = <BoardList board={boards} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }
  

  return (
    <React.Fragment>
      <section>
        <AddBoard onAddBoard={addBoardHandler} />
      </section>
      <section>
        <button onClick={fetchBoardsHandler}>Fetch board</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default BoardPage;
