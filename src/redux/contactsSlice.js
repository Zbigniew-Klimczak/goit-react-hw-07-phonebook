import { createSlice, nanoid } from '@reduxjs/toolkit';
import { fetchContactsItems } from './operations';
const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContactsItems.pending](state) {
      state.isLoading = true;
    },
    [fetchContactsItems.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
      console.log(action.payload);
    },

    [fetchContactsItems](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
  /*reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            name: name.trim(),
            number: number.trim(),
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id === action.payload
      );
      state.splice(index, 1);
    },
  },*/
});

/*export const { addContact, deleteContact } = contactsSlice.actions;*/
export const contactsReducer = contactsSlice.reducer;
