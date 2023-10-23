import React from 'react';
import SinglePriorityItem from './SinglePriorityItem';
import SingleItem from './SingleItem';

export const PriorityItems = ({
  items,
  removeItem,
  editItem,
  changePosition,
  addtoPriority,
  changePriorityPosition,
  removeFromPriority,
}) => {
  return (
    <div className="priority-items">
      {items.map((item) => {
        return (
          <SinglePriorityItem
            key={item.id}
            item={item}
            items={items}
            removeItem={removeItem}
            editItem={editItem}
            changePriorityPosition={changePriorityPosition}
            changePosition={changePosition}
            addtoPriority={addtoPriority}
            removeFromPriority={removeFromPriority}
          />
        );
      })}

      <div className="line-break"></div>
    </div>
  );
};

export default PriorityItems;
