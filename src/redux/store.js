import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from './contacts/reducer';

const store = configureStore({
  reducer: {
    contacts:contactsReducer,
  },
  devTools: true
});

export default store;