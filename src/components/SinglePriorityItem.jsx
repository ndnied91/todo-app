import React, { useState } from 'react';

import {
  FaArrowUp,
  FaArrowDown,
  FaTrashAlt,
  FaRegCheckCircle,
  FaRegFlag,
} from 'react-icons/fa';

export const SingleItem = ({
  item,
  items,
  removeItem,
  editItem,
  changePriorityPosition,
  addtoPriority,
  changePosition,
  removeFromPriority,
}) => {
  return (
    <div
      className="single-item"
      style={item.completed ? { opacity: '0.5' } : null}
    >
      <div className="todoInfo">
        <div className="btns">
          {item.id !== 0 ? (
            <span
              className="btn"
              onClick={() => changePriorityPosition(item, 'up')}
            >
              <FaArrowUp />
            </span>
          ) : (
            <span className="disable btn">
              <FaArrowUp className="disable" />
            </span>
          )}

          {item.id !== items.length - 1 ? (
            <span
              className="btn"
              // onClick={() => changePriorityPosition(item, 'down', stateList)}
              onClick={() => changePosition(item, 'down', items, 'priority')}
            >
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
        <FaRegFlag className="pFlag" onClick={() => removeFromPriority(item)} />

        <FaRegCheckCircle
          className="checkmark"
          onClick={() => editItem(item.id, items, 'priority')}
        />

        <button
          className="btn remove-btn"
          onClick={() => removeItem(item.id, items, 'priority')}
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
