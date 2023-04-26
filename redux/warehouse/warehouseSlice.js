import { createSlice } from '@reduxjs/toolkit';

const savedArticlesSlice = createSlice({
  name: 'savedArticles',
  initialState: [],
  reducers: {
    saveArticle: (state, action) => {
      state.push(action.payload);
    },
    removeArticle: (state, action) => {
      return state.filter(article => article.id !== action.payload);
    },
  },
});

export const { saveArticle, removeArticle } = savedArticlesSlice.actions;

export default savedArticlesSlice.reducer;

// export const selectSavedPosts = (state) =>{
//   state.posts.saveArticle
// }