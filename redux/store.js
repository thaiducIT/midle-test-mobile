import { configureStore } from '@reduxjs/toolkit';
import savedArticlesReducer from '../redux/warehouse/warehouseSlice';

export default configureStore({
  reducer: {
    savedArticles: savedArticlesReducer,
  },
});