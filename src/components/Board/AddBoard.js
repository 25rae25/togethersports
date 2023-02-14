import React, { useRef } from 'react';

import classes from './AddBoard.module.css';

const AddBoard = (props) => {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const releaseDateRef = useRef('');

  const submitHandler = (event) => {
    event.preventDefault();

    const board = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      releaseDate: releaseDateRef.current.value,
    };

    props.onAddBoard(board);
  }

  return (
    <form onSubmit={submitHandler} className={classes.formWrap}>
      <div className={classes.control}>
        <label htmlFor='title'>제목</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='opening-text'>내용</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>날짜</label>
        <input type='text' id='date' ref={releaseDateRef} />
      </div>
      <button className={classes.addButton}>추가하기</button>
    </form>
  );
}


export default AddBoard;
