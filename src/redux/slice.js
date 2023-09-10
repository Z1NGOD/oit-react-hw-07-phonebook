const { createSlice } = require('@reduxjs/toolkit');
const InitialContactsState = {
  contacts: [],
};
const initialFilterState = {
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: InitialContactsState,
  reducers: {
    addContact: (state, action) => ({
      ...state,
      contacts: [...state.contacts, action.payload],
    }),
    deleteContact: (state, action) => ({
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== action.payload),
    }),
  },
});
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
export const { addContact, deleteContact } = contactsSlice.actions;
export const { changeFilter } = filterSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const filterReducer = filterSlice.reducer;
