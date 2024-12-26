import { configureStore } from '@reduxjs/toolkit'
import shapeReducer from  '../features/shapeSlice';

const store = configureStore({
    reducer: {
        shapes: shapeReducer,
    }
});

export default store;