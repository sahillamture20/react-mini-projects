import {useState} from 'react';
/* import useState from 'react'; 

If we import te hook like this then we will get below error
"uncaught typeerror: usestate is not a function or its return value is not iterable".
*/

function ModalForm({ showModal, setShowModal, addPersonToList }) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('black');

  const handleCreatePerson = () => {
    if (name.trim() === '') {
      alert('Please enter a name.');
      return;
    }
    addPersonToList({ name, color });
    setName('');
    setColor('black');
    setShowModal(false);
  };

  const handleName = (e) => setName(e.target.value);
  const handleColor = (e) => setColor(e.target.value);
  return (
    showModal && (
      <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Add Person</h2>
          <input
            type="text"
            value={name}
            onChange={handleName}
            placeholder="Enter name"
            className="border border-gray-400 rounded-md px-3 py-2 mb-4 w-full"
          />
          <div className="flex items-center mb-4">
            <span className="mr-2">Name Color:</span>
            <select
              value={color}
              onChange={handleColor}
              className="border border-gray-400 rounded-md px-3 py-2"
            >
              <option value="black">Black</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          <button
            onClick={handleCreatePerson}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Create
          </button>
        </div>
      </div>
    )
  );
}

export default ModalForm;
