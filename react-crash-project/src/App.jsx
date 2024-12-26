import { useState } from "react";
import ModalForm from "./components/ModalForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [people, setPeople] = useState([]);
  const colorVariants = {
    black:'text-black',
    red:'text-red-600',
    blue: 'text-blue-600',
    green: 'text-green-600',
  }
  const addPersonToList = (person) => {
    setPeople([...people, person]);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Person List</h1>
      <button
        onClick={() => setShowModal(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Add Person
      </button>
      <ul className="mt-4">
        {people.map((person, index) => (
          <li
            key={index}
            className={`${colorVariants[person.color]} text-2xl font-medium`}
          >
            {person.name}
          </li>
        ))}
      </ul>
      <ModalForm
        showModal={showModal}
        setShowModal={setShowModal}
        addPersonToList={addPersonToList}
      />
    </div>
  );
}

export default App;
