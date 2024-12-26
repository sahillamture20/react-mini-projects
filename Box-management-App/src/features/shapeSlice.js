// src/features/boxSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shapes: [
    { id: 1, type: 'rectangle' },
    { id: 2, type: 'circle' },
    { id: 3, type: 'square' },
  ],
  totalCount: 3,
  areShapesVisible: true,
};

const shapeSlice = createSlice({
  name: 'shape',
  initialState,
  reducers: {
    addShape: (state, action) => {
      const type = action.payload;
      const newShape = { id: state.totalCount + 1, type };
      state.shapes.push(newShape);
      state.totalCount += 1;
    },
    deleteShape: (state, action) => {
      const id = action.payload;
      state.shapes = state.shapes
        .filter((shape) => shape.id !== id)
        .map((shape, index) => ({ ...shape, id: index + 1 }));
      state.totalCount = state.shapes.length;
    },
    toggleVisibility: (state) => {
      state.areShapesVisible = !state.areShapesVisible;
    },
    reset: () => initialState,
  },
});

export const { addShape, deleteShape, toggleVisibility, reset } = shapeSlice.actions;
export default shapeSlice.reducer;
