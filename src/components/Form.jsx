import { useState } from 'react';
import { toast } from 'react-toastify';

const Form = ({ addItem }) => {
  const [newItemName, setNewItems] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItemName) {
      toast.error('Please enter a valid todo');
      return;
    } else {
      addItem(newItemName);
      setNewItems('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h4> Grocery List </h4>
      <div className="form-control">
        <input
          type="text"
          className="form-input"
          placeholder="Add your todo.."
          value={newItemName}
          onChange={(e) => setNewItems(e.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
