// src/App.js
import { useDispatch, useSelector } from 'react-redux';
import { toggleVisibility, reset, addShape, deleteShape } from './features/shapeSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { shapes, areShapesVisible } = useSelector((state) => state.shapes);
  // console.log(shapes);

  const handleAddRectangle = () => dispatch(addShape('rectangle'))
  const handleAddCircle = () => dispatch(addShape('circle'))
  const handleAddSquare = () => dispatch(addShape('square'))
  return (
    <div className="App">
      <div className='toolbar'>
        <button onClick={handleAddRectangle}>Add Rectangle</button>
        <button onClick={handleAddCircle}>Add Circle</button>
        <button onClick={handleAddSquare}>Add Square</button>
        <button onClick={() => dispatch(toggleVisibility())}>
          {areShapesVisible ? 'Hide' : 'Show'} Boxes
        </button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
      {areShapesVisible && (
        <div className="box-container">
          {shapes.map((shape) => (
            <div key={shape.id} className={`box ${shape.type}`}>
              {/* {console.log(`${shape.type} button clicked`)} */}
              <button onClick={() => dispatch(deleteShape(shape.id))}>Delete</button>
              <p>{shape.type}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
