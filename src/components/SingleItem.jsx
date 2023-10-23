import React, { useState } from 'react';

import {
  FaArrowUp,
  FaArrowDown,
  FaTrashAlt,
  FaRegCheckCircle,
  FaFlag,
} from 'react-icons/fa';

import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

export const SingleItem = ({
  item,
  items,
  removeItem,
  editItem,
  changePosition,
  addtoPriority,
}) => {
  return (
    <div
      className="single-item"
      style={item.completed ? { opacity: '0.5' } : null}
    >
      <div className="todoInfo">
        <div className="btns">
          {item.id !== 0 ? (
            <span className="btn" onClick={() => changePosition(item, 'up')}>
              <FaArrowUp />
            </span>
          ) : (
            <span className="disable btn">
              <FaArrowUp className="disable" />
            </span>
          )}

          {item.id !== items.length - 1 ? (
            <span className="btn" onClick={() => changePosition(item, 'down')}>
              <FaArrowDown />
            </span>
          ) : (
            <span className=" disable btn">
              <FaArrowDown />
            </span>
          )}
        </div>

        <p
          style={{
            textTransform: 'capitalize',
          }}
        >
          {' '}
          {item.name}
        </p>
      </div>

      <div className="actionBtns">
        <FaFlag className="pFlag" onClick={() => addtoPriority(item)} />

        <FaRegCheckCircle
          className="checkmark"
          onClick={() => editItem(item.id, items)}
        />

        <button
          className="btn remove-btn"
          onClick={() => removeItem(item.id, items)}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default SingleItem;

// toast
// user submits empty form
// when new item is added
// when we remove the item
