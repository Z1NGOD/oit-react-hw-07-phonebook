const { createSlice } = require('@reduxjs/toolkit');

const initialFilterState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    changeFilter: (state, action) => ({
      ...state,
      filter: action.payload,
    }),
  },
});

export const { changeFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
