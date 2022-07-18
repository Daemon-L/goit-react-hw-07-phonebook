import { configureStore } from "@reduxjs/toolkit";

import filterReducer from './contacts/reducer';
import {contactsApi} from './contacts/contactsApi';

const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

export default store;