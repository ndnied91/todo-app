import React from 'react';
import SingleItem from './SingleItem';

export const Items = ({
  items,
  removeItem,
  editItem,
  changePosition,
  addtoPriority,
}) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            items={items}
            removeItem={removeItem}
            editItem={editItem}
            changePosition={changePosition}
            addtoPriority={addtoPriority}
          />
        );
      })}
    </div>
  );
};

export default Items;
