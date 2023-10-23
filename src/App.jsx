import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import Items from './components/Items';
import Form from './components/Form';

import { useState } from 'react';
import PriorityItems from './components/PriorityItems';

let defaultList = [];
let defaultPList = [];

if (localStorage.getItem('list') !== null) {
  defaultList = JSON.parse(localStorage.getItem('list'));
} else defaultList = [];

if (localStorage.getItem('p_list') !== null) {
  defaultPList = JSON.parse(localStorage.getItem('p_list'));
} else defaultPList = [];

const setLocalStorage = (items) => {
  localStorage.setItem('list', JSON.stringify(items));
};

const setLocalPListStorage = (items) => {
  localStorage.setItem('p_list', JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(defaultList);
  const [priorityItems, setpriorityItems] = useState(defaultPList);

  const addItem = (itemName) => {
    const obj = {
      name: itemName,
      completed: false,
      // id: items.length,
      id: setId(),
    };

    const newItems = [...items, obj];
    setItems(newItems);

    setLocalStorage(newItems);
    toast.success(`Successfully added new item ${itemName}`);
  };

  const setId = () => {
    if (items.length === 0) {
      return 1;
    } else {
      let idx = items[items.length - 1].id;
      return idx + 1;
    }
  };

  // working for both
  const removeItem = (itemId, itemsList, stateList) => {
    const newItems = itemsList.filter((item) => item.id !== itemId);
    newItems.map((i, index) => (i.id = index));

    if (stateList === 'priority') {
      setpriorityItems(newItems);
      setLocalPListStorage(newItems);
    } else {
      setItems(newItems);
      setLocalStorage(newItems);
    }

    toast.success(`Successfully remove item`);
  };

  // working for both
  const editItem = (itemId, itemList, stateList) => {
    console.log(itemId, itemList);
    const newItems = itemList.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    if (stateList === 'priority') {
      setpriorityItems(newItems);
      setLocalPListStorage(newItems);
    } else {
      setItems(newItems);
      setLocalStorage(newItems);
    }
  };

  const changePosition = (item, position) => {
    console.log(item, position);
    const arrCopy = [...items];

    if (position === 'down') {
      const index = item.id + 1;
      arrCopy.splice(index - 1, 1); // remove 1 element at index 2 (value: 3)
      arrCopy.splice(index, 0, item);
    } else {
      const index = item.id - 1;
      arrCopy.splice(index + 1, 1); // remove 1 element at index 2 (value: 3)
      arrCopy.splice(index, 0, item);
    }

    arrCopy.map((i, index) => (i.id = index));
    setItems(arrCopy);
    setLocalStorage(arrCopy);
  };

  const changePriorityPosition = (item, position) => {
    console.log(' in changePriorityPosition');
    console.log(item, position);
    const arrCopy = [...priorityItems];

    if (position === 'down') {
      const index = item.id + 1;
      arrCopy.splice(index - 1, 1); // remove 1 element at index 2 (value: 3)
      arrCopy.splice(index, 0, item);
    } else {
      const index = item.id - 1;
      arrCopy.splice(index + 1, 1); // remove 1 element at index 2 (value: 3)
      arrCopy.splice(index, 0, item);
    }

    arrCopy.map((i, index) => (i.id = index));
    setpriorityItems(arrCopy);
    setLocalPListStorage(arrCopy);
  };

  const addtoPriority = (item) => {
    if (!priorityItems.includes(item)) {
      const newArr = [...priorityItems];
      newArr.push(item);
      removeItem(item.id, items);
      newArr.map((i, index) => (i.id = index));
      setpriorityItems(newArr);

      setLocalPListStorage(newArr);
    } else {
      toast.warn('Item already in Priority List!');
    }
  };

  const removeFromPriority = (item) => {
    console.log('removing', item);
    removeItem(item.id, priorityItems, 'priority'); //removes from p list
    addItem(item.name); //adds to main list
  };

  console.log('items', items);
  console.log('p_items', priorityItems);

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form addItem={addItem} />

      {priorityItems.length > 0 ? (
        <div>
          <h4 className="title" style={{ paddingTop: '20px' }}>
            {' '}
            Priority list{' '}
          </h4>
          <PriorityItems
            items={priorityItems}
            removeItem={removeItem}
            editItem={editItem}
            changePriorityPosition={changePriorityPosition}
            addtoPriority={addtoPriority}
            changePosition={changePosition}
            removeFromPriority={removeFromPriority}
          />
        </div>
      ) : null}

      <h4 className="title"> Normal list </h4>
      <Items
        items={items}
        removeItem={removeItem}
        editItem={editItem}
        changePosition={changePosition}
        addtoPriority={addtoPriority}
      />
    </section>
  );
};

export default App;
